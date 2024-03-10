import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', phonenumber: '040-123456', id: 1 },
      { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', phonenumber: '39-23-6423122', id: 4 }
    ])
  const [newName, setNewName] = useState('')
  const [newphoneeumber, setNewphone] = useState('')
  const [searchQuery,setsearchQuery]=useState('')


const AddPersonData = (event) => {
  event.preventDefault()
  if (persons.some(x => x.name === newName && x.phonenumber===newphoneeumber)) {
    window.alert(newName+" with "+ newphoneeumber+' is already added to phonebook')
    
  } 
  else {
    const newObject = { name: newName,
      phonenumber:newphoneeumber ,
      id:persons.length+1}
    setNewName("") 
    setNewphone("") 
    setPersons(NewPersons => [...NewPersons, newObject])
  
  }
}
const filter=persons.filter(x=>x.name.toLowerCase().includes(searchQuery.toLowerCase()))

return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <input value={searchQuery} onChange={event=>setsearchQuery(event.target.value)} />
      </div>
      <h2>add a new</h2>

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
      {filter.map(x=>
        <div key={x.id}>{x.name} {x.phonenumber}</div>)
 }
      </div>
  )
}

export default App