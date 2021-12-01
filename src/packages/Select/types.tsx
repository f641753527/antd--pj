import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
import { InputProps, InputSize } from "../Input";

export type onSelectType = (item: string) => void

export interface ISelectProps {
  value: string
  size?: InputSize
  multiSelect?: boolean
  rednerOption?: (item: any) => ReactNode
  onSelect: onSelectType
}

export interface ISelectOptionListProps {
  rednerOption?: (item: any) => ReactNode
}

export interface ISelectOptionProps {
  value: string
  label?: ReactNode
  disabled?: boolean
}

export interface SelectContextType {
  currentValue: string
  onSelect: onSelectType
}