import { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	const [weather, setWeather] = useState({})

	useEffect(() => {
		const api_key = process.env.REACT_APP_API_KEY
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`)
			.then(({ data }) => setWeather(data))
			.catch((err) => console.log("Couldn't get weather", err))
	}, [country])

	return (
		<>
			<h1>{country.name.common}</h1>
			<p>Capital: {country.capital}</p>
			<p>Area: {country.area} m&#xB2;</p>
			<h3>languages</h3>
			<ul>
				{Object.values(country.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={country.flags.png} alt='flag' />
			{console.log(weather)}
			<h3>Weather in {country.capital}</h3>
			{weather.main ? (
				<>
					<p>Temperature {weather.main.temp} Celcius</p>
					<img
						src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt='weather icon'
					/>
					<p>Wind {weather.wind.speed} m/s</p>
				</>
			) : (
				<p>Loading weather data</p>
			)}
		</>
	)
}

export default Country
