import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Filter from "./components/filter";
import PersonForm from './components/personForm';
import Persons from './components/persons';

const App = () => {
  
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data)
      })
  }, [])

  const addPhone = (event) => {
    console.log(event.target);
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

      <Filter filterValue={filterValue} onChange={handleFilterValue}/>

      <h3>Add a new</h3>

      <PersonForm onSubmit={addPhone} newName={newName} onChangeName={handleNewName} newNumber={newNumber} onChangeNumber={handleNewNumber}/>

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>

    </div>
  )
}

export default App