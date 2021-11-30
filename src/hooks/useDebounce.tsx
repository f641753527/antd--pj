import { useEffect, useState } from "react"

const useDebounce = (searchValue: string, duration: number) => {

  const [value, setVaue] = useState(searchValue)
  useEffect(() => {
    const timer = setTimeout(() => {
      setVaue(searchValue)
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [searchValue, duration])
  return value
}

export default useDebounce
