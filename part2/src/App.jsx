import { useState ,useEffect} from 'react'
import ContentService from './Services/ContentService'
import Person from './components/Person'
import Filter from './components/Filter'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newphoneeumber, setNewphone] = useState('')
  const [searchQuery,setsearchQuery]=useState('')
  const [previousId,setPreviousId]=useState(null)

   useEffect(()=>{
    ContentService.getAll()
    .then(response=>{
      setPersons(response.data)
    })

  },[])

  useEffect(() => {
    if (persons.length > 0) {
    setPreviousId(parseInt(persons[persons.length - 1].id));
    }
  }, [persons]);


const AddPersonData = (event) => {
  event.preventDefault()
  if (persons.some(x => x.name === newName && x.phonenumber===newphoneeumber)) {
    window.alert(newName+" with "+ newphoneeumber+' is already added to phonebook')
    
  }
  else {
    const newObject = {
      id: (previousId ? previousId + 1 : 1).toString(),
      name: newName,
      phonenumber:newphoneeumber ,
      
    }
     ContentService.create(newObject)
      .then(response=>{
        console.log(response.data)
        setPersons(NewPersons => [...NewPersons, newObject])
        setNewName("") 
        setNewphone("") 
      })}
  
}
const filter=persons.filter(x=>x.name.toLowerCase()
.includes(searchQuery.toLowerCase()))


const toDelete = (id,name) => {
  if (window.confirm("Delete "+ name+" ?")){
    ContentService.todelete(id)
      .then(() => {
      setPersons(persons.filter(person => person.id !== id))})
      }
    }

return (
  <div>
  <h2>Phonebook</h2>
  <Filter search={searchQuery} setsearch={()=>setsearchQuery(event.target.value)}/>
 
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
    <Person key={x.id} person={x}
    Delete={()=>toDelete(x.id,x.name)}/>)}


  </div>
  )
}
   

export default App