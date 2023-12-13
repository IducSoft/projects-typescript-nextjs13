"use client"
import React from 'react'
import   "../../globals.css";
import { FC } from "react"
import AddNewItem from './AddNewItem';


type ColumnProps = {
    text?: string
    children?: React.ReactNode;
}



const Column: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <div className='ColumnContainer'>
        <h2 className='ColumnTitle text-black'>{text}</h2>
        {children}
        <AddNewItem
          toggleButtonText="+ Add another task"
          onAdd={console.log}
          dark={true}
        />
    </div>
  )
}

export default Column;