import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ course }) =>
	course.parts.map((part) => <Part key={part.id} part={part} />)

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
)

const Total = ({ course }) => {
	let total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
	return <b>total of {total} exercises</b>
}

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

export default Course
