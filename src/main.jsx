import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FilterComponent from './FilterComponent'
import './index.css'
import InputComponent from './InputComponent'
import ListComponent from './ListComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <InputComponent />
    <FilterComponent />
    <ListComponent todoItems={todoItems} />
    </div>
  </React.StrictMode>
)
