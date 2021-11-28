import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FC } from "react";
import useClassNames from "../../hooks/useClassNames";
import { IIconProps } from './types'

export * from './types'

library.add(fas)


const Icon: FC<IIconProps> = (props) => {

  const { icon, theme, className, ...restProps } = props

  const classNames = useClassNames({ compDesc: 'icon', nativeClasses: className, theme })

  return <FontAwesomeIcon icon ={icon} className={classNames} {...restProps} />

}

export default Icon
