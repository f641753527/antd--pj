import React, { FC, useState } from "react";
import Icon from "../Icon";
import { CSSTransition } from 'react-transition-group'
import { AlertProps, AlertType } from './types'
import useClassNames from "../../hooks/useClassNames";
export * from './types'

const Alert: FC<AlertProps> = (props) => {
  const [showAlert, changeAlertShow] = useState(true)
  const { showClose, onClose, className, type, header, content, icon, ...restProps } = props
  const classNames = useClassNames({ compDesc: 'alert', nativeClasses: className, type })

  const handleAlertClose = () => {
    changeAlertShow(false)
    onClose && onClose()
  }

  return (
    <CSSTransition in={showAlert} timeout={200} appear unmountOnExit classNames={classNames}>
      <div {...restProps } className={classNames}>
        { icon && <Icon icon={icon} className={'alert--close'} onClick={ handleAlertClose } /> }
        <div className={'alert--body'}>
          <div className={'alert--header'}>
          {
            header
          }
          </div>
          {content &&
            <div className={'alert--content'}>
              {
                content
              }
            </div>
          }
        </div>
      </div>
    </CSSTransition>
  )
}




Alert.defaultProps = {
  type: AlertType.Default,
  showClose: true,
}

export default Alert