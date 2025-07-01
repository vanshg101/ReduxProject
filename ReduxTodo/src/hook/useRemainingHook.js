import { useSelector } from "react-redux";
import React from 'react'

function UseRemainingHook() {
    const todos=useSelector((state)=>state.todos)
    return todos.filter((todo)=>!todo.status)
}

export default UseRemainingHook
