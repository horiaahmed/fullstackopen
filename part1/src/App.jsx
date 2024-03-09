import { useState } from 'react'
const Button=({onSmash,text})=><button onClick={onSmash}>{text}</button>
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad
  const avg=(good+neutral+bad)/3
  const positisve=()=>{
     if (total===0) {
       return 0
     }return(good /total)*100}
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <div><Button onSmash={()=>(setGood(good+1))} text="good"/>
      <Button onSmash={()=>(setNeutral(neutral+1))} text="neutral"/>
      <Button onSmash={()=>(setBad(bad+1))} text="bad"/>
      </div>
      <h1>Statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>total {total}</div>
      <div>average {avg}</div>
      <div>positive {positisve()}%</div>
   </div>
  )
}


export default App;