import React from 'react'
import   "../../globals.css";
import { FC } from "react"

type ColumnProps = {
    text?: string
    children?: React.ReactNode;
}



const Column: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <div className='ColumnContainer'>
        <h2 className='ColumnTitle'>{text}</h2>
        {children}
    </div>
  )
}

export default Column;