const Persons = ({ search, persons }) => (
	search
		? persons
				.filter((p) =>
					p.name.toLowerCase().includes(search.toLowerCase()) ? p : null
				)
				.map((person) => (
					<p key={person.name}>
						{person.name} {person.number}
					</p>
				))
		: persons.map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
		  ))
)

export default Persons