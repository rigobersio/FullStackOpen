import React, { useState } from 'react';
import Anecdotes from './components/Anecdotes';

const objVotes = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0
};
const App = () => {
  
  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(objVotes);
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h2>has {allVotes[selected]} votes</h2>
      <Anecdotes selected={selected} setSelected={setSelected} allVotes={allVotes} setAllVotes={setAllVotes} />
    </div>
  )
}

export default App