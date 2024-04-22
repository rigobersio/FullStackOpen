import React, { useState } from 'react'

const Statistics = () => {
  return (
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
  )
}

const StatisticLine = ({ good, neutral, bad }) => {
  return (
    <p>{text} {value}</p>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // no definas componentes adentro de otro componente
  

  return (
    <div>
      <h1>give feedback</h1>

      <Botones />

      <h1>statistics</h1>
      {(good !== 0 || neutral !== 0 || bad !== 0) ? <Statistics /> : <p>No feedback given</p>}
    </div>
  )
}

export default App