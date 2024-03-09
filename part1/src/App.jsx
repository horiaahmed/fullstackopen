import { useState } from 'react'
const Header=({text})=><h1>{text}</h1>
const Button=({onSmash,text})=><button onClick={onSmash}>{text}</button>
const Statistics = (props) =><Button onSmash={props.onSmash} text={props.text}/>
const Values=(props)=>{return <div>{props.text} {props.value}</div>}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad
  const avg=(good+neutral+bad)/3
  const positive=()=>{
         if (total===0) {
             return " "
          }return(good /total)*100+"%"}
return (
    <div>
      <Header text="Give Feedback"/>
       <Statistics onSmash={()=>(setGood(good+1))} text="good"/>
       <Statistics onSmash={()=>(setNeutral(neutral+1))} text="neutral"/>
       <Statistics onSmash={()=>(setBad(bad+1))} text="bad"/>
       <Header text="Statistics"/>
       <Values text="good" value={good}/>
       <Values text="neutral" value={neutral}/>
       <Values text="bad" value={bad}/>
       <Values text="all" value={total}/>
       <Values text="average" value={avg}/>
       <Values text="positive" value={positive()}/>
</div>
  )
}
 export default App;