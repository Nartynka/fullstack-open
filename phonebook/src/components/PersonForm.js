const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addName}) => (
	<form>
		<div>
			name: <input value={newName} onChange={handleNameChange} />
		</div>
		<div>
			number:{' '}
			<input type='number' value={newNumber} onChange={handleNumberChange} />
		</div>
		<div>
			<button type='submit' onClick={addName}>
				add
			</button>
		</div>
	</form>
)

export default PersonForm
