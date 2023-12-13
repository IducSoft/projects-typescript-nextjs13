"use client"
import React, { useState } from 'react'
import "../../globals.css"
import NewItemForm from './NewItemForm'



type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}


const AddNewItem = (props: AddNewItemProps) => {

    const [showForm, setShowForm] = useState<boolean>(false);
    const { onAdd, toggleButtonText, dark } = props;
    if (showForm) {
    // We show item creation form here
      return(
        <NewItemForm 
          onAdd={text => {
            onAdd(text)
            setShowForm(false)
          }}
        />
      )
    }

  return (
    <div className={` text-black AddItemButton`} onClick={() => setShowForm(true)}>
        {toggleButtonText}
    </div>
  )
}

export default AddNewItem;