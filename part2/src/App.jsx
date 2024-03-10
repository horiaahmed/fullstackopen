
const Header=({text})=><h1>{text}</h1>
const Part=({parts})=>{
  return <div>
    {parts.map(part=>
      <p key={part.id} >{part.name} {part.exercises}</p>
      )}
  </div>

}
const Total=({parts})=>{
  const total=parts.reduce( (sum,order) =>{
    console.log('what is happening', sum, order)
     return sum+order.exercises},0)
  
 return  <h4>total of {total} exercises</h4>
    
}
const Course=({course})=>{
  return <div>
    <Header text={course.name}/>
    <Part parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>

}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    
    ]
  }

  return <Course course={course} />
}
export default App;