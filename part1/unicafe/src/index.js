import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

const Button = ({text, action}) => {
  return (
    <button onClick={action}>{text}</button>
  )
}

const Statistics = () => {
  return (
    <>
      <h4>Statistics</h4>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = "Give Feedback"

  return (
    <>
      <Title title={title}/>
      <Button text="Good" action=/>
      <Button text="Neutral"/>
      <Button text="Bad"/>

      <Statistics />

    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)