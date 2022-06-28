import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

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

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number:{' '}
					<input
						type='number'
						value={newNumber}
						onChange={handleNumberChange}
					/>
				</div>
				<div>
					<button type='submit' onClick={addName}>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.name}>{person.name} {person.number}</p>
			))}
		</div>
	)
}

export default App
