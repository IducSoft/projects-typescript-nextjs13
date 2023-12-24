import React, { useRef } from 'react'
import   "../../globals.css";
import { useAppState } from '../state/DragAndDropContext';
import { isHidden } from '../utils/isHidden';
import { useItemDrag } from '../utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { moveTask } from '../state/actions';


type CardProps = {
  text: string
  id: string
  columnId: string
  isPreview?: boolean
}

const Card = ({text,id,columnId,isPreview}: CardProps) => {
  const { draggedItem, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId
  })

  const [, drop] = useDrop({accept: "CARD",hover() {
    if (!draggedItem) {
      return
    }
    if (draggedItem.type !== "CARD") {
      return
    }
    if (draggedItem.id === id) {
      return
    }
  dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId))}
  })

  drag(drop(ref))

  return (
    <div className='CardContainer text-black' hidden={isHidden(draggedItem, "CARD", id, isPreview)}  ref={ref}>{text}</div>
  )
}

export default Card;