import { ChangeEvent, FC, useRef } from 'react'
import axios from 'axios'
import Button from '../Button'
import { UploadProps } from './types'

const Upload: FC<UploadProps> = (props) => {

  const { action, onChange, onSuccess, onError, onProgress } = props

  const uploadRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    uploadRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList = e.target.files as FileList
    onChange && onChange(fileList)
    const list: File[] = Array.from(fileList)
    list.forEach(file => {
      fileUpload(file)
    })
  }

  const fileUpload = (file: File) => {
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (e: ProgressEvent) => {
        const percent = Math.round(e.loaded * 100 / e.total) || 0
        onProgress && onProgress(percent, file)
      }
    }).then(response => {
      const res = response.data
      onSuccess && onSuccess(res, file)
    }).catch(e => {
      onError && onError(e, file)
    })
  }


  return (
    <div>
      <Button onClick={handleClick}>Upload</Button>
      <input ref={uploadRef} style={{ display: 'none' }} type="file" onChange={handleFileChange} />
    </div>
  )

}

export default Upload