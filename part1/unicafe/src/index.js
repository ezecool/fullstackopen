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

const Statistics = ( {good, neutral, bad, total} ) => {

  const average = isNaN((good - bad) / total) ? 0 : (good - bad) / total
  const positive = isNaN(good / total) ? 0 : (good / total)

  return (
    <>
      <h4>Statistics</h4>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </>
  )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [totalClicks, setTotalClicks] = useState(0)

  const title = "Give Feedback"

  const handleGoodClick = () => {
    setTotalClicks(totalClicks + 1)
    setGood(good + 1);
  }
  
  const handleNeutralClick = () => {
    setTotalClicks(totalClicks + 1)
    setNeutral(neutral + 1);
  }
  
  const handleBadClick = () => {
    setTotalClicks(totalClicks + 1)
    setBad(bad + 1);
  }

  return (
    <>
      
      <Title title={title}/>
      
      <Button text="Good" action={handleGoodClick}/>
      <Button text="Neutral" action={handleNeutralClick}/>
      <Button text="Bad"action={handleBadClick}/>

      <Statistics good={good} neutral={neutral} bad={bad} total={totalClicks}/>

    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)