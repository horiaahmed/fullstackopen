const Header1 = ({ text }) => <h1>{text}</h1>
const Header2 = ({ text }) => {
  //  console.log({text})
return <div><h2>{text}
 </h2> </div>
}
const Part = ({ parts }) => {
  const partNames = parts.map(part => part.name)
//   console.log(partNames)
  return (
    <div>
      {partNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <h4>Total of {total} exercises</h4>;
}

const Course = ({ course }) => {
    console.log({course})
  return (
    <div>
      <Header1 text="Web development curriculum" />
      {course.map((props) => (
        <div key={props.id}>
          <Header2 text={props.name} />
          
          <Part parts={props.parts} />
          <Total parts={props.parts} />
        </div>
      ))}
    </div>
  )
}

export default Course;