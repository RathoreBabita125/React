import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Feature/todo/TodoSlice'


export const store=configureStore({

    reducer:todoReducer

})