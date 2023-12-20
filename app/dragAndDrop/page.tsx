"use client"
import React from "react";
import AppContainer from "./ui/AppContainer";
import Column from "./ui/Column";
import { useAppState } from "./state/DragAndDropContext";
import AddNewItem from "./ui/AddNewItem";
import { addList } from "./state/actions";



const Page = () => {
  const {lists, dispatch} = useAppState();

  return (
    <div className="h-[100vh]">
      <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id}/>
      ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={text => dispatch(addList(text))}
        />
      </AppContainer>
    </div>
  )
}

export default Page