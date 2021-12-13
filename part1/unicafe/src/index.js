import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

const Button = ( {text, action} ) => {
  return (
    <button onClick={action}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ( {good, neutral, bad, allClicks, average, positive} ) => {

  if (allClicks === 0) {
    return (
      <h3>No feedback given</h3>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <Statistic text="Good" value={good}/>
          <Statistic text="Neutral" value={neutral}/>
          <Statistic text="Bad" value={bad}/>
          <Statistic text="All" value={allClicks}/>
          <Statistic text="Average" value={average}/>
          <Statistic text="Positive" value={positive}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const title = "Give Feedback"

  const handleGoodClick = () => {
    
    let newAllClicks = allClicks + 1
    setAllClicks(newAllClicks)
    
    let newGood = good + 1
    setGood(newGood);
    
    setAverage( (newGood - bad) / newAllClicks)
  
    setPositive((newGood / newAllClicks) * 100) 
  }
  
  const handleNeutralClick = () => {
    
    let newAllClicks = allClicks + 1
    setAllClicks(newAllClicks)
    
    setNeutral(neutral + 1);
    
    setPositive((good / newAllClicks) * 100)
  }
  
  const handleBadClick = () => {
    
    let newAllClicks = allClicks + 1
    setAllClicks(newAllClicks)
    
    let newBad = bad + 1
    setBad(newBad);
    
    setAverage( (good - newBad) / newAllClicks)
    setPositive((good / newAllClicks ) * 100)

  }

  return (
    <>
      
      <Title title={title}/>
      
      <Button text="Good" action={ handleGoodClick }/>
      <Button text="Neutral" action={handleNeutralClick}/>
      <Button text="Bad"action={handleBadClick}/>

      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} positive={positive}/>

    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)