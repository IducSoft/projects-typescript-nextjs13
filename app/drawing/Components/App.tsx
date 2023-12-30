"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./Counter";




const App = () => {
    
    const globalState = useSelector((state)=> state);
    const dispatch = useDispatch()
    
    
    console.log(globalState)
    

    return (
        <div>
            <Counter/>
        </div>
        
    )
}

export default App