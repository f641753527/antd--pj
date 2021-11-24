interface classNamesProps {
  compDesc: string
  nativeClasses?: string
  size?: string
  type?: string
  disabled?: boolean
}

const useClassNames = (config: classNamesProps) => {
  const { compDesc, nativeClasses, size, type, disabled } = config
  let classNames = [compDesc]
  if (nativeClasses) {
    classNames = classNames.concat(nativeClasses.split(' '))
  }
  if (disabled) {
    classNames.push(`${compDesc}-disabled`)
  }

  size && classNames.push(`${compDesc}-${size}`)
  type && classNames.push(`${compDesc}-${type}`)

  return classNames.join(' ')
}

export default useClassNames;
