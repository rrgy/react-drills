import React, { useState } from 'react'
import './App.css'
import Todo from './todo.js'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const newList = () => {
    list.push(input)
    setInput('')
  }
  const listItems = list.map((element, index) => {
    return <Todo key={index} element={element} />
  })
  return (
    <div>
      <h1>My to-do list:</h1>
      <div>
        <input onChange={e => setInput(e.target.value)} placeholder='Enter new task' value={input} />
        <button onClick={newList}>Add</button>
      </div>
      {listItems}
    </div>
  )
}
export default App