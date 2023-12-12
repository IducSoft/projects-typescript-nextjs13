"use client"
import React, { useState } from 'react'
import "../../globals.css"


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
    }

  return (
    <div className={`${dark ? "#000" : "#fff"} AddItemButton`} onClick={() => setShowForm(true)}>
        {toggleButtonText}
    </div>
  )
}

export default AddNewItem;