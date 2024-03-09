//1.5
const Header =(props)=>{
  return <div><h1>{props.course.name}</h1></div>
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
    <Part parts={props.content.parts[0]}/>
    <Part parts={props.content.parts[1]}/>
    <Part parts={props.content.parts[2]}/>

     </div>
}
const Total=(props)=>{
  return <div> <p>Number of exercises {props.total} </p></div>
}
const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
  const total=course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises
  return <div>
   <Header course={course}/>
   <Content content={course} />
   <Total total={total}/>
  </div>
}
export default App;