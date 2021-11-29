import {  HTMLAttributes } from "react";
import { IconName } from '@fortawesome/fontawesome-common-types'

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
  icon?: IconName
}
