const Person=({person,Delete})=>{
    return(<div >
        {person.name} {person.phonenumber}
        <button onClick={()=>Delete()} >Delete</button>
    </div>

    )

}
export default Person 