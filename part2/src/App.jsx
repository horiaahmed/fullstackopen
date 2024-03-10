import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
  phonenumber:"040-1234567" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newphoneeumber, setNewphone] = useState('')


const AddPersonData = (event) => {
  event.preventDefault()
  if (persons.some(x => x.name === newName && x.phonenumber===newphoneeumber)) {
    window.alert(newName+" with "+ newphoneeumber+' is already added to phonebook')
    
  } 
  else {
    const newObject = { name: newName,
      phonenumber:newphoneeumber }
    setNewName("") 
    setNewphone("") 
    setPersons(NewPersons => [...NewPersons, newObject])
  }}
return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddPersonData}>
        <div> Name: <input value={newName}
          onChange={event=>setNewName(event.target.value)}/></div>
          <div> Number: <input value={newphoneeumber}
          onChange={event=>setNewphone(event.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x=>
      <div key={x.name}>{x.name} {x.phonenumber}</div>
        )}
      </div>
  )
}

export default App