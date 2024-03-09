import { useState } from 'react'
const Header=({text})=><h1>{text}</h1>
const Button=({onSmash,text})=><button onClick={onSmash}>{text}</button>
const Statistics = (props) =><Button onSmash={props.onSmash} text={props.text}/>
const StatisticLine=(props)=>{return <div>
 <table >
   <tbody>
     <tr>
       <td>{props.text}</td>
       <td >{props.value}</td>
     </tr>
   </tbody>
 </table>
</div>}
const Condition=({good,neutral,bad,total,avg,positive})=>{
 if(good===0&&neutral===0&&bad ===0){
   return "No Given feedback"
 }return(
   <div>
   <StatisticLine text="good" value={good}/>
   <StatisticLine text="neutral" value={neutral}/>
   <StatisticLine text="bad" value={bad}/>
   <StatisticLine text="all" value={total}/>
   <StatisticLine text="average" value={avg}/>
   <StatisticLine text="positive" value={positive}/>
   </div>
 )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad
  const avg=(good-bad)/total
  const positive=()=>(good /total)*100+"%"
return (
    <div>
      <Header text="Give Feedback"/>
       <Statistics onSmash={()=>(setGood(good+1))} text="good"/>
       <Statistics onSmash={()=>(setNeutral(neutral+1))} text="neutral"/>
       <Statistics onSmash={()=>(setBad(bad+1))} text="bad"/>
       <Header text="Statistics"/>
       <Condition good={good} neutral={neutral} bad={bad}
       total={total} avg={avg} positive={positive()}/>






     
</div>
  )
}
 export default App;