import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import Input from ".";
import useClassNames from "../../hooks/useClassNames";
import useClickOutside from "../../hooks/useClickOutside";
import useDebounce from "../../hooks/useDebounce";
import Icon from "../Icon";
import { AutoCompleteProps, SelectItemType } from "./types";

const AutoComplete: FC<AutoCompleteProps> = (props) => {

  const { onChange, fetchSuggestion, onSelect, renderItem, ...restProps } = props

  const [list, changeList] = useState<SelectItemType[]>([])

  const [isLoading, setLoading] = useState(false)

  const [activeItemIndex, setActive] = useState(0)

  const shouldTriggerSearch = useRef(true)

  const refComp = useRef<HTMLDivElement>(null)

  useClickOutside(refComp, () => {
    changeList([])
  })

  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    onChange && onChange(e)
    shouldTriggerSearch.current = true
  }

  const searchValue = useDebounce(props.value as string, 1500)

  useEffect(() => {
    setActive(0)
    if (!shouldTriggerSearch.current) return
    const result = fetchSuggestion(searchValue)
    if (result instanceof Promise) {
      setLoading(true)
      result.then(list => {
        changeList(list)
        setLoading(false)
      })
    } else {
      changeList(result)
    }
  }, [searchValue])

  const handleSelect = (item: SelectItemType) => {
    onSelect && onSelect(item)
    shouldTriggerSearch.current = false
    changeList([])
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const code = e.keyCode
    switch(code) {
      case 13:
        handleSelect(list[activeItemIndex])
        break;
      case 27:
        changeList([])
        break;
      case 38:
        setActive((activeItemIndex - 1 + list.length) % list.length)
        break;
      case 40:
        setActive((activeItemIndex + 1) % list.length)
        break;
      default:
        break;
    }
  }

  function handleRenderItem(item: SelectItemType) {
    return renderItem ? renderItem(item) : item.value
  }

  const renderList = () => {
    return (
      <ul className='suggestion-list'>
        {
          isLoading ? 
          <Icon icon='spinner' spin /> :
          list.map((item, i) => (
            <li className={`suggestion-item ${i === activeItemIndex?'is-active':''}`} key={item.value} onClick={() => handleSelect(item)}>{handleRenderItem(item)}</li>
          ))
        }
      </ul>
    )
  }

  return (
    <div ref={refComp} className='auto-complete'>
      <Input onKeyUp={handleKeyUp} onChange={handleInputChange}  {...restProps} />
      {
        list.length > 0 && renderList()
      }
    </div>
  )
}

export default AutoComplete
