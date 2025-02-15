import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import TodoList from "../todo/todo";



createRoot(document.getElementById('root')).render(
    <StrictMode>
     <TodoList/>
    </StrictMode>,
  )