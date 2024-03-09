

const Header =(props)=>{
  return <div><h1>{props.course}</h1></div>
}
const Content =(C)=>{
  return <div><p>{C.part1} {C.exercises1}</p>
  <p>{C.part2} {C.exercises2}</p>
  <p>{C.part3} {C.exercises3}</p>
  </div>
}
const Total=(t)=>{
  return <div> <p>Number of exercises {t.total} </p></div>
}
const App =()=>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total=exercises1+exercises2+exercises3
  return <div>
   <Header course={course}/>
   <Content part1={part1} exercises1={exercises1}  
   part2={part2} exercises2={exercises2}
   part3={part3} exercises3={exercises3}/>
   <Total total={total}/>
  </div>
}
export default App;