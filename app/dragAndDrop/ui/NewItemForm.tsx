import React, { useState } from 'react'
import "../../globals.css"
import useFocus from '../utils/useFocus'



type NewItemFormProps = {
    onAdd(text: string): void
}


const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    
    const [text, setText] = useState("")
    const inputRef = useFocus();

    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            onAdd(text)
        }
    }
    
  return (
    <div className='NewItemFormContainer'>
        <input 
            value={text}
            onChange={e => setText(e.target.value)}
            ref={inputRef}
            className='text-black px-2 py-1'
            onKeyPress={handleAddText}
        />
        <button className='NewItemButton mt-1'  onClick={() => onAdd(text)}>
            Create
        </button>
    </div>
  )
}

export default NewItemForm