import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const TodoSlice=createSlice({
    name:todos,
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                //playload---object
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!=action.payload
            })
        }
    }

})


export const {addTodo,removeTodo}=TodoSlice.actions
export default TodoSlice.reducer

