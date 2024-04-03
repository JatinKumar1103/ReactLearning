import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0);

  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    

  }
  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value</button>
      
    </>

  )
}

export default App


// ui updation ko react control krta