import { MenuMode } from '../packages/Menu';

interface classNamesProps {
  compDesc: string
  nativeClasses?: string
  size?: string
  type?: string
  disabled?: boolean
  mode?: MenuMode
  active?: boolean
}

const useClassNames = (config: classNamesProps) => {
  const { compDesc, nativeClasses, size, type, disabled, mode, active } = config
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

  size && classNames.push(`${compDesc}-${size}`)
  type && classNames.push(`${compDesc}-${type}`)
  mode && classNames.push(`${compDesc}-${mode}`)

  return classNames.join(' ')
}

export default useClassNames;
