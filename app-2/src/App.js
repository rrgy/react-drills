import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState(['apple', 'orange'])

  let foods = list.map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

  return (
    <div>
      {foods}
    </div>
  )
}

export default App;
