import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = (props) => {

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(6))

  const changeAnecdote = () => {
    //const newAnecdoteIndex = Math.floor(Math.random() * (6 - 0) + 0);
    const newAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdoteIndex)
  }

  const vote = (selected) => {
    return () => {
      const newVotes = [...votes]
      newVotes[selected] += 1
      setVotes(newVotes)
      //setVotes([...votes][selected] += 1)
    }
  }

  const mostVoted = () => {
    let max = 0
    let maxIndex = 0
    votes.forEach( (element, index) => {
      if (element > max) {
        max = element
        maxIndex = index
      }
    });

    return maxIndex
  }

  return (
    <>
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}. Has {votes[selected]} votes.
      </div>
      
      <Button onClick={vote(selected)} text="Vote"/>
      <Button onClick={changeAnecdote} text="Next anecdote"/>

      <div>
        <h3>Anecdote with most votes</h3>
        {props.anecdotes[mostVoted(anecdotes)]}
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)