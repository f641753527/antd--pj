import { CSSProperties } from "react";
import { IconTheme } from "../Icon";

export interface ProgressBarProps {
  percent: number
  height?: number
  style?: CSSProperties
  theme?: IconTheme
  showText?: boolean
}