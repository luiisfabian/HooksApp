import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Counter } from './01-useState/Counter'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/focusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallBackHook } from './06-memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { HooksApp } from './HooksApp'

// import './08-useReducer/intro-reducer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  {/* // <React.StrictMode> */}

 
     <MainApp />
  {/* </React.StrictMode>, */}
  </BrowserRouter>,

)
