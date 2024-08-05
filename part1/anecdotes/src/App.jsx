import React, { useState } from 'react';
import Anecdotes from './components/Anecdotes';





const App = () => {
  
  const [selected, setSelected] = useState(0)
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default App