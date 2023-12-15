"use client"
import React from "react";
import AppContainer from "./ui/AppContainer";
import Column from "./ui/Column";
import { useAppState } from "./state/DragAndDropContext";
import AddNewItem from "./ui/AddNewItem";



const Page = () => {

  const { lists } = useAppState()
  return (
    <div className="h-[100vh]">
      <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={console.log}
        />
      </AppContainer>
    </div>
  )
}

export default Page