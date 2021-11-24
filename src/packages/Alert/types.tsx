import {  HTMLAttributes } from "react";

export enum AlertType {
  Default = 'default',
  Success = 'success',
  Danger = 'danger',
  Warn = 'warn',
}

export interface AlertProps extends HTMLAttributes<HTMLElement> {
  type?: AlertType
  children?: HTMLElement
  showClose?: boolean
  onClose?: () => void
  header?: React.ReactElement | string
  content?: React.ReactElement | string
}
