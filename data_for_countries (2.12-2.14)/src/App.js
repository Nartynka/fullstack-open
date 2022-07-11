import axios from 'axios'
import { useState, useEffect } from 'react'
import Country from './components/Country'

function App() {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState('')

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then(({ data }) => setCountries(data))
			.catch((err) => console.log("Couldn't get countries", err))
	}, [])

	const handleInputChange = (event) => {
		setFilter(event.target.value)
	}

	const filterCountries = () => {
		const matchingCountries = countries.filter((country) =>
			country.name.common.toLowerCase().includes(filter.toLowerCase())
		)
		if (matchingCountries.length > 10)
			return <p>Too many matches, specify another filter</p>
		else if (matchingCountries.length === 1)
			return <Country country={matchingCountries[0]} />
		else
			return (
				<ul>
					{matchingCountries.map((country) => (
						<li key={country.name.common}>
							{country.name.common}
							<button onClick={() => showDetails(country)}>show</button>
						</li>
					))}
				</ul>
			)
	}

	const showDetails = (country) => {
		setFilter(country.name.common)
	}

	return (
		<>
			<h1>Search for countries</h1>
			<label htmlFor='search'>find countries: </label>
			<input id='search' type='text' onChange={handleInputChange} />
			{filter ? filterCountries() : null}
		</>
	)
}

export default App
