"use client"
import React from "react";
import AppContainer from "./ui/AppContainer";
import AddNewItem from "./ui/AddNewItem";
import Column from "./ui/Column";
import Card from "./ui/Card";



const page = () => {
  return (
    <div className="h-[100vh]">
      <AppContainer>
        <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript" />
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing" />
        </Column>
      </AppContainer>
    </div>
  )
}

export default page