import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputHTMLAttributes, ReactNode, ChangeEvent } from "react";

export enum InputSize {
  Large = 'lg',
  Small = 'sm',
}

type IgnoreProps = 'size' | 'prefix' | 'suffix' | 'onChange'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, IgnoreProps> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prefix?: ReactNode
  suffix?: ReactNode
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestion: (keyword: string) => string[]
  onSelect?: (item: string) => void
}
