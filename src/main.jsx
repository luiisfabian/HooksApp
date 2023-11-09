import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Counter } from './01-useState/Counter'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <Counter /> */}
    <CounterWithCustomHooks />
  </React.StrictMode>,
)
