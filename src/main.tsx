import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx' 
import TodoApp from './Todolist.tsx'
import Course from './Course.tsx'
import ButtonAdd from './components/ButtonAdd.tsx'
import TodoList from './components/TodoList.tsx'
import HeaderText from './components/Header.tsx'
import Member from './components/Member.tsx'
import TodoListHookForm from './components/TodoListHookForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TodoApp /> */}
    {/* <App /> */}
    {<TodoListHookForm/>}
    
  </StrictMode>,
)