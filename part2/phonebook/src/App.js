import React, { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  const addPhone = (event) => {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const nameExists = persons.find( ({name}) => name.toUpperCase() === newName.toUpperCase().trim())
  
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterValue = (event) => {
    setFilterValue(event.target.value)
  }

  const personsToShow = filterValue === '' ? persons : persons.filter(({ name }) => name.toUpperCase().includes(filterValue.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <label>Filter show with </label>
        <input value={filterValue} onChange={handleFilterValue} />
      </form>

      <h3>Add a new</h3>
      <form onSubmit={addPhone}>
        <div>
          Name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {
        personsToShow.map(person => <p key={person.name}>{person.name} - {person.number}</p> )
      }
    </div>
  )
}

export default App