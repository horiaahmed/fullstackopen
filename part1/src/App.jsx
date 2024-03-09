const Header =(props)=>{
  return <div><h1>{props.course}</h1></div>
}
const Part=(props)=>{
  return <div>
  <p>
    {props.name} {props.exercises}
    </p> 
  </div>
}
const Part1=(p1)=>{
  return <Part name={p1.part1} exercises={p1.exercises1}/>
}
const Part2=(p2)=>{
  return <Part name={p2.part2} exercises={p2.exercises2}/>
}
const Part3=(p3)=>{
  return <Part name={p3.part3} exercises={p3.exercises3}/>
}
const Content =(props)=>{
  return <div>
    <Part1 part1={props.part1} exercises1={props.exercises1}/>
    <Part2 part2={props.part2} exercises2={props.exercises2}/>
    <Part3 part3={props.part3} exercises3={props.exercises3}/>

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