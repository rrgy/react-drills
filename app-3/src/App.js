import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [list, setList] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])
  const [filterList, setFilterList] = useState('')

  let listItems = list.filter((element, index) => {
    return element.includes(filterList)
  }).map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

  return (
    <div>
      <input onChange={e => setFilterList(e.target.value)}></input>
      {listItems}
    </div>
  )
}

export default App