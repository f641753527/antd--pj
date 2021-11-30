import { RefObject, useEffect } from "react"

const useClickOutside = (refComp: RefObject<HTMLElement>, handler: Function) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!refComp.current || refComp.current.contains(e.target as HTMLElement)) return
      handler(e)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [refComp, handler])
}

export default useClickOutside