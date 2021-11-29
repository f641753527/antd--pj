import { MenuMode } from '../packages/Menu';
import { IconTheme } from '../packages/Icon'

interface classNamesProps {
  compDesc: string
  nativeClasses?: string
  size?: string
  type?: string
  disabled?: boolean
  mode?: MenuMode
  active?: boolean
  opened?: boolean
  theme?: IconTheme
  prefix?: boolean
  suffix?: boolean
}

const useClassNames = (config: classNamesProps) => {
  const { compDesc, nativeClasses, size, type, disabled, mode, active, opened, theme, prefix, suffix } = config
  let classNames = [compDesc]
  if (nativeClasses) {
    classNames = classNames.concat(nativeClasses.split(' '))
  }
  if (disabled) {
    classNames.push(`is-disabled`)
  }
  if (active) {
    classNames.push('is-active')
  }
  if (opened) {
    classNames.push('is-open')
  }
  if (prefix) {
    classNames.push(`${compDesc}-group-prefix`)
  }
  if (suffix) {
    classNames.push(`${compDesc}-group-suffix`)
  }
  if (prefix || suffix) {
    classNames.push(`${compDesc}-group`)
  }

  size && classNames.push(`${compDesc}-${size}`)
  type && classNames.push(`${compDesc}-${type}`)
  mode && classNames.push(`${compDesc}-${mode}`)
  theme && classNames.push(`${compDesc}-${theme}`)

  return classNames.join(' ')
}

export default useClassNames;
