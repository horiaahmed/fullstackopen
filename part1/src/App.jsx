//1.4
const Header =(props)=>{
  return <div><h1>{props.course}</h1></div>
}
const Part=(props)=>{
  return <div>
  <p>
    {props.parts.name} {props.parts.exercises}
    </p> 
  </div>
}

const Content =(props)=>{
  return <div>
    <Part parts={props.content[0]}/>
    <Part parts={props.content[1]}/>
    <Part parts={props.content[2]}/>

     </div>
}
const Total=(props)=>{
  return <div> <p>Number of exercises {props.total} </p></div>
}
const App =()=>{
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const total=parts[0].exercises+parts[1].exercises+parts[2].exercises
  return <div>
   <Header course={course}/>
   <Content content={parts} />
   <Total total={total}/>
  </div>
}
export default App;