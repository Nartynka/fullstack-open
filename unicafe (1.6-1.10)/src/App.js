import { useState } from 'react'

const StatisticLine = ({ value, text }) => <div>{text} {value}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Header = ({ text }) => <h1>{text}</h1>

const All = ({ good, neutral, bad }) => (
	<StatisticLine text='all' value={good + neutral + bad} />
)
const Average = ({ good, neutral, bad }) => (
	<StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
)
const Positive = ({ good, neutral, bad }) => (
	<StatisticLine text='positive' value={`${(good / (good + neutral + bad)*100)} %`} />
)

const Statistic = ({ good, neutral, bad }) => (
	<>
		<StatisticLine text='good' value={good} />
		<StatisticLine text='neutral' value={neutral} />
		<StatisticLine text='bad' value={bad} />
		<All good={good} neutral={neutral} bad={bad} />
		<Average good={good} neutral={neutral} bad={bad} />
		<Positive good={good} neutral={neutral} bad={bad} />
	</>
)

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const increaseGood = () => setGood(good + 1)
	const increaseNeutral = () => setNeutral(neutral + 1)
	const increaseBad = () => setBad(bad + 1)

	return (
		<>
			<Header text='give feedback' />
			<Button onClick={increaseGood} text='good' />
			<Button onClick={increaseNeutral} text='neutral' />
			<Button onClick={increaseBad} text='bad' />
			<Header text='statistics' />
			{good || neutral || bad ? <Statistic good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>}
		</>
	)
}

export default App
