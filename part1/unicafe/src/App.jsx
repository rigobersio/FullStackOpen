import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // no definas componentes adentro de otro componente
  const Statistics = (props) => {
    return (
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
    )
  }

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