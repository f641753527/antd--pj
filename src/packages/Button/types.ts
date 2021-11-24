import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link',
}


export interface BaseButtonProps {
  children: any
  size?: ButtonSize
  buttonType?: ButtonType
  disabled?: boolean
  className?: string
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = NativeButtonProps & AnchorButtonProps