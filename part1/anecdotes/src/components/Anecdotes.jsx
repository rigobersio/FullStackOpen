import React from 'react';
import Votes from './Votes';




const Anecdotes = ({ arrAnecdotes, selected, setSelected, allVotes, setAllVotes }) => {

  const handleVotes = () => {
    const copyPropagación = {
      ...allVotes,
      [selected] : allVotes[selected] + 1
    }
    setAllVotes(copyPropagación);

  


  }

  return (
    <>
      <p>{arrAnecdotes[selected]}</p>
      <Votes onSmash={handleVotes} /><button onClick={() => setSelected(Math.floor(Math.random() * 8))}>next anecdote</button>
    </>
  )
};

export default Anecdotes;