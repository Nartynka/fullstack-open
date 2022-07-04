const Filter = ({search, onChange}) => (
	<>
		<label htmlFor='search'>filter phonebook by </label>
		<input value={search} type='text' id='search' onChange={onChange} />
	</>
)

export default Filter
