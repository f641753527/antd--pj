import React, { FC, useState, DragEvent } from "react";
import { DraggableProps } from ".";
import useClassNames from "../../hooks/useClassNames";

const Drag: FC<DraggableProps> = ({ children, putFile }) => {

  const [isOver, setOver] = useState(false)

  const classNames = useClassNames({ compDesc: 'uploader-dragger', dragover: isOver })

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setOver(over)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setOver(false)
    putFile(e.dataTransfer.files)
  }



  return (
    <div
      className={classNames}
      onDragOver={(e) => { handleDrag(e, true) }}
      onDragLeave={(e) => { handleDrag(e, false)}}
      onDrop={ (e) => { handleDrop(e) } }
    >
      { children }

    </div>
  )
}

export default Drag
