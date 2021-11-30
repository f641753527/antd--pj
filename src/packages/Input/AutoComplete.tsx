import { ChangeEvent, FC, useEffect, useState } from "react";
import Input from ".";
import useDebounce from "../../hooks/useDebounce";
import Icon from "../Icon";
import { AutoCompleteProps, SelectItemType } from "./types";

const AutoComplete: FC<AutoCompleteProps> = (props) => {

  const { onChange, fetchSuggestion, onSelect, renderItem, ...restProps } = props

  const [list, changeList] = useState<SelectItemType[]>([])

  const [isLoading, setLoading] = useState(false)

  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    onChange && onChange(e)
  }

  const searchValue = useDebounce(props.value as string, 1500)

  useEffect(() => {
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
  }

  function handleRenderItem(item: SelectItemType) {
    return renderItem ? renderItem(item) : item.value
  }

  function renderList() {
    return (
      <ul>
        {
          isLoading ? 
          <Icon icon='spinner' spin /> :
          list.map(item => (
            <li key={item.value} onClick={() => handleSelect(item)}>{handleRenderItem(item)}</li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      <Input onChange={handleInputChange}  {...restProps} />
      {
        list.length > 0 && renderList()
      }
    </div>
  )
}

export default AutoComplete
