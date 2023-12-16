"use client"
import React from 'react'
import   "../../globals.css";
import { FC } from "react"
import AddNewItem from './AddNewItem';
import { useAppState } from '../state/DragAndDropContext';
import Card from './Card';
import { addTask } from '../state/actions';



type ColumnProps = {
  text: string
  children?: React.ReactNode
  id: string
}


const Column: FC<ColumnProps> = ({ text, id }: ColumnProps) => {


  const { getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)

  return (
    <div className='ColumnContainer'>
        <h2 className='ColumnTitle text-black'>{text}</h2>
        {tasks.map(task => (
          <Card text={task.text} key={task.id} id={task.id} />
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