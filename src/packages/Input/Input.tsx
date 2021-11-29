import React, { FC, useState } from 'react'
import { InputProps } from ".";
import useClassNames from '../../hooks/useClassNames';

const Input: FC<InputProps> = (props) => {
  const { disabled, size, suffix, prefix, ...restProps } = props

  const classNames = useClassNames({ compDesc: 'input', disabled, size, prefix: !!prefix, suffix: !!suffix })
  return (
    <div className={classNames}>
      {prefix && <div className='input-prefix'>{prefix}</div>}
      <input className='input-inner' disabled={disabled} {...restProps} />
      {suffix && <div className='input-suffix'>{suffix}</div>}
    </div>
  )
}

export default Input