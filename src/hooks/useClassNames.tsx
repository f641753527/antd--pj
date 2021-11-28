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
}

const useClassNames = (config: classNamesProps) => {
  const { compDesc, nativeClasses, size, type, disabled, mode, active, opened, theme } = config
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

  size && classNames.push(`${compDesc}-${size}`)
  type && classNames.push(`${compDesc}-${type}`)
  mode && classNames.push(`${compDesc}-${mode}`)
  theme && classNames.push(`${compDesc}-${theme}`)

  return classNames.join(' ')
}

export default useClassNames;
