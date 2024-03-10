import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const Addname = (event) => {
  event.preventDefault()
  if (persons.some(x => x.name === newName)) {
    window.alert(newName +' is already added to phonebook')
    
  } else {
    const newObject = { name: newName }
    setNewName("") 
    setPersons(NewPersons => [...NewPersons, newObject])
  }}



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={Addname}>
        <div>
          name: <input value={newName}
          onChange={event=>setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
    
      {persons.map(x=>
      <div key={x.name}>{x.name}</div>
        )}
        

    </div>
  )
}

export default App