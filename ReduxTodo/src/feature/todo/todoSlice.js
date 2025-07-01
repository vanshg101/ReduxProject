import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage=()=>{
  try{
    const data=localStorage.getItem("todoKey")
    return data?JSON.parse(data):[]
  }
  catch{
    return []
  }
}
const initialState = {
  todos:loadFromLocalStorage()
  //  [
  //   {
  //     id: 1,
  //     text: "hellow",
  //   },
  // ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        status:false
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if(todo.id === action.payload.id)todo.text = action.payload.text 
      });
    },
    toggleStatue:(state,action)=>{
      state.todos.forEach((todo)=>{
        if(todo.id==action.payload)todo.status=!todo.status
      })
    }
  },
});

export const { addTodo, removeTodo ,updateTodo,toggleStatue} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
