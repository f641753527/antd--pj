import { ChangeEvent, FC, useRef, useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import { UploadProps } from './types'
import { UploadFile } from '.'
import PreViewFileList from './PreViewFileList'
import Drag from './Drag'

const Upload: FC<UploadProps> = (props) => {

  const {
    fileList, onRemove, action, onChange, onSuccess, onError, onProgress, beforeUpload,
    name, headers = {}, data = {}, multiple, accept, draggable, children,
  } = props

  const uploadRef = useRef<HTMLInputElement>(null)

  const [uploadList, changeUploadList] = useState<UploadFile[]>(fileList ?? [])

  const handleClick = () => {
    uploadRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList = e.target.files as FileList
    processFileList(fileList)
  }

  const processFileList = (fileList: FileList) => {
    onChange && onChange(fileList)
    const list: File[] = Array.from(fileList)
    list.forEach(file => {
      if (!beforeUpload) {
        fileUpload(file)
      } else {
        const res = beforeUpload(file)
        if (res instanceof Promise) {
          res.then(response => {
            fileUpload(file)
          })
        } else if (res !== false) {
          console.warn(res)
          fileUpload(file)

        }
      }
    })
  }

  const fileUpload = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now().toString(),
      raw: file,
      name: file.name,
      size: file.size,
      status: 'ready',
      percent: 0
    }
    changeUploadList([_file, ...uploadList])
    const formData = new FormData()
    formData.append(name ?? 'fileName', file)
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...headers
      },
      onUploadProgress: (e: ProgressEvent) => {
        const percent = Math.round(e.loaded * 100 / e.total) || 0
        updateUploadList(_file, {
          status: 'uploading',
          percent,
        })
        onProgress && onProgress(percent, file)
      }
    }).then(response => {
      const res = response.data
      onSuccess && onSuccess(res, file)
      updateUploadList(_file, {
        status: 'success',
        response: res
      })
    }).catch(e => {
      onError && onError(e, file)
      updateUploadList(_file, {
        status: 'error',
        error: e
      })
    })
  }

  const updateUploadList = (file: UploadFile, updateObj: Partial<UploadFile>) => {
    changeUploadList((preList) => {
      return preList.map(item => {
        return item.uid !== file.uid ? item : { ...file, ...updateObj }
      })
    })
  }

  const handleRemove = (file: UploadFile) => {
    changeUploadList((preList) => {
      return preList.filter(item => item.uid !== file.uid)
    })
    onRemove && onRemove(file)
  }

  return (
    <div onClick={handleClick}>
      {
        draggable ? <Drag putFile={processFileList} >{ children }</Drag> : children
      }
      <input ref={uploadRef} style={{ display: 'none' }} type="file" onChange={handleFileChange}
        multiple={multiple} accept={accept}
      />
      <PreViewFileList fileList={uploadList} onRemove={ handleRemove } />
    </div>
  )

}

Upload.defaultProps = {
  name: 'fileName',
  multiple: false,
  accept: '.pdf',
  draggable: false,
}

export default Upload