import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  console.log(text)
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} value={text}></input>
      <p>{text}</p>
    </div>
  )
}

export default App