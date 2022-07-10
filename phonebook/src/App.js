import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(({data}) => setPersons(data))
			.catch((err) => console.log('Cannot get persons data', err))
	}, [])
	
	const addName = (event) => {
		event.preventDefault()
		const personObject = {
			name: newName,
			number: newNumber
		}

		if (persons.find((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`)
			return
		}
		setPersons(persons.concat(personObject))
		setNewName('')
		setNewNumber('')
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSearchChange = (event) => {
		setSearch(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter search={search} onChange={handleSearchChange} />
			<h3>Add new</h3>
			<PersonForm
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
				addName={addName}
			/>
			<h3>Numbers</h3>
			<Persons search={search} persons={persons} />
		</div>
	)
}

export default App
