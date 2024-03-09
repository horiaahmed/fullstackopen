const Note = ({ note ,toggleimportance}) => {
  const label=note.important ? "make not important" : "make important"
  
  return (
    <div>
      <li>{note.content}</li>
      <button onClick={toggleimportance}>{label}</button>
    </div>

  )
}

export default Note