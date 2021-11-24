import { FC } from "react";
import { ButtonProps, ButtonSize, ButtonType } from "./types";
import useClassNames from "../../hooks/useClassNames";

export * from './types'

const Button: FC<ButtonProps> = (props) => {

  const { children, size, buttonType, disabled, className, href, ...restProps } = props

  const classNames = useClassNames({ compDesc: 'btn', nativeClasses: className, size, type: buttonType, disabled })

  if (buttonType === ButtonType.Link) {
    return (
      <a {...restProps} className={ classNames } href={ href }>{ children }</a>
    )
  }

  return (
    <button {...restProps} className={ classNames } disabled={ disabled }>{ children }</button>
  )
}

Button.defaultProps = {
  buttonType: ButtonType.Default,
  size: ButtonSize.Large
}

export default Button;
