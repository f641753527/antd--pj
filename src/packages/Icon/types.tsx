
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export type IconTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export  interface IIconProps extends FontAwesomeIconProps {
  theme?: IconTheme
}
