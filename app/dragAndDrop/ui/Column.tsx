"use client"
import React, { useRef } from 'react'
import   "../../globals.css";
import { FC } from "react"
import AddNewItem from './AddNewItem';
import { useAppState } from '../state/DragAndDropContext';
import Card from './Card';
import { addTask, moveList } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { isHidden } from '../utils/isHidden';


type ColumnProps = {
  text: string
  children?: React.ReactNode
  id: string
  isPreview?: boolean
}


const Column: FC<ColumnProps> = ({ text, id, isPreview }: ColumnProps) => {

  const [, drop] = useDrop({accept: "COLUMN",hover() {
    if (!draggedItem) {
    return
    }
    if (draggedItem.type === "COLUMN") {
    if (draggedItem.id === id) {
    return
    }
  dispatch(moveList(draggedItem.id, id))}
  }
  })
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: "COLUMN", id, text })
  drag(ref)
  drag(drop(ref))
  
  return (
    <div className='ColumnContainer' ref={ref} isPreview={isPreview} isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}>
        <h2 className='ColumnTitle text-black'>{text}</h2>
          {tasks.map(task => (
            <Card id={task.id} columnId={id} text={task.text} key={task.id} />
          ))}
        
        <AddNewItem
          toggleButtonText="+ Add another task"
          onAdd={text =>
            dispatch(addTask(text, id))
          }
          dark={true}
        />
    </div>
  )
}

export default Column;