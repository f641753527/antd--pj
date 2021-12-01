export type onSuccessType = (res: any, file: File) => void

export interface UploadProps {
  action: string
  autoUpload?: boolean
  onProgress?: (percent: number, file: File) => void
  onSuccess?: onSuccessType
  onError?: onSuccessType
  onChange?: (fileList: FileList) => void
  beforeUpload?: (file: File) => boolean | Promise<boolean>
}