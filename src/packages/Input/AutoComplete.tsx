import { ChangeEvent, FC, useState } from "react";
import Input from ".";
import { AutoCompleteProps } from "./types";

const AutoComplete: FC<AutoCompleteProps> = (props) => {

  const { value, defaultValue, onChange, fetchSuggestion, onSelect, ...restProps } = props

  const [inputValue, setValue] = useState(value)
  const [list, changeList] = useState<string[]>([])

  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    console.log(e)
    const value = e.target.value
    setValue(value)
    const list = fetchSuggestion(value)
    changeList(list)
    onChange && onChange(e)
  }

  const handleSelect = (e: string) => {
    setValue(e)
    onSelect && onSelect(e)
  }

  function renderList() {
    return (
      <ul>
        {
          list.map(item => (
            <li key={item} onClick={() => handleSelect(item)}>{item}</li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      <Input value={inputValue} onChange={handleInputChange}  {...restProps} />
      {
        list.length > 0 && renderList()
      }
    </div>
  )
}

export default AutoComplete
