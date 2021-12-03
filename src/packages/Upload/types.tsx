export type onSuccessType = (res: any, file: File) => void

export interface UploadProps {
  action: string
  autoUpload?: boolean
  onProgress?: (percent: number, file: File) => void
  onSuccess?: onSuccessType
  onError?: onSuccessType
  onChange?: (fileList: FileList) => void
  beforeUpload?: (file: File) => boolean | Promise<any> | void
  fileList?: UploadFile[]
  onRemove?: (file: UploadFile) => void
  name?: string
  headers?: { [key: string]: any }
  data?: { [key: string]: any }
  multiple?: boolean
  accept?: string
  draggable?: boolean
}

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string
  name: string
  size: number
  raw?: File
  percent: number
  status: UploadStatus
  response?: any
  error?: any
}

export interface PreviewFileListProps {
  fileList: UploadFile[]
  onRemove: (file: UploadFile) => void
}

export interface DraggableProps {
  putFile: (fileList: FileList) => void
}