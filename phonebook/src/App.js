import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')

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
