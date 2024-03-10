import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const onchangehadeler=()=>{
    setNewName(event.target.value)
  }

  const Addname=(event)=>{
    event.preventDefault()
    const nameObject= {name:newName}
    setPersons(persons.concat(nameObject))
    setNewName(' ')
  }
   
 

  return (
    <div>
      <h2>Phonebook</h2>
    
      <form  onSubmit={Addname}>
        <div>
         
          name: <input value={newName}
          onChange={onchangehadeler}/>
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