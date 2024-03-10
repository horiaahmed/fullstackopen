const Header1=({text})=><h1>{text}</h1>
const Header2=({text})=><h2>{text}</h2>

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
    <Header1 text="Web development curriculum"/>
    <Header2 text={course[0].name}/>
     <Part parts={course[0].parts}/>
    <Total parts={course[0].parts}/> 
    <Header2 text={course[1].name}/>
    <Part parts={course[1].parts}/>
    <Total parts={course[1].parts}/> 


    </div>

}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return <Course course={courses} />
}
export default App;