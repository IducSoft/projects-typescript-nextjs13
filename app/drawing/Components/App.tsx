"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./Counter";
import { PostsList } from "./PostsList";
import { AddPostForm } from "./AddFormPost";

const App = () => {
    const globalState = useSelector((state)=> state);
    const dispatch = useDispatch()
    console.log(globalState)
    return (
        <div>
            <Counter/>
            <AddPostForm/>
            <PostsList/>
        </div>
        
    )
}

export default App