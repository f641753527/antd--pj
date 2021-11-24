import { FC, useState } from "react";
import { AlertProps, AlertType } from './types'
import useClassNames from "../../hooks/useClassNames";
export * from './types'

const Alert: FC<AlertProps> = (props) => {
  const [showAlert, changeAlertShow] = useState(true)
  const { showClose, onClose, className, type, header, content, ...restProps } = props
  const classNames = useClassNames({ compDesc: 'alert', nativeClasses: className, type })

  const handleAlertClose = () => {
    changeAlertShow(false)
    onClose && onClose()
  }

  return (
    <>{ showAlert &&
      <div {...restProps } className={classNames}>
        { showClose && <span className={'alert--close'} onClick={ handleAlertClose }>关闭</span> }
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
    }</>
  )
}




Alert.defaultProps = {
  type: AlertType.Default,
  showClose: true,
}

export default Alert