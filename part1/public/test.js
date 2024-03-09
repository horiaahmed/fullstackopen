// const arr = [
//   {
//     name: 'Half Stack application development',
//     id: 1,
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       }
//     ]
//   },
//   {
//     name: 'Node.js',
//     id: 2,
//     parts: [
//       {
//         name: 'Routing',
//         exercises: 3,
//         id: 1
//       },
//       {
//         name: 'Middlewares',
//         exercises: 7,
//         id: 2
//       }
//     ]
//   }
// ];

// // Extracting names of all parts
// const partNames = arr.flatMap(course => course.parts.map(part => part.name));

// console.log(partNames);





// // //map
// // var names=[]
// // for (let i = 0; i < arr.length; i++) {
// //  names.push(arr[i].name)
  
// // }

// // var name=arr.map((x) =>x.name +" worxs as "+x.job)
// // console.log(names)
// // console.log(name)

// // reduce
// // var total=0
// // for (let i = 0; i < arr.length; i++) {
// //  total+=arr[i].name
  
// // }
// // console.log(total)
// // var totalsum=arr.reduce(function (sum,order) {
// //   console.log(sum , order)
// //   return  sum+order.name
  
// // },0)
// // console.log(totalsum)


// // var hoho=arr.filter(function(x) {
// //   return x.job==="hoby"
  
// // })
// // console.log(hoho)
// // var ishoby=function(x) {
// //     return x.job==="hoby"
// // }
// // var hoby=arr.filter(ishoby)
// // console.log(hoby[])




// // var x=function(y) {
// //   return y*5
  
// // }
// // var c=x
// // c(5)


// // // function z() {
// // //   var b=44
// // //   function x() {
// // //     var a=5
// // //     function y() {
// // //       console.log("a is ",a,"b is",b)
// // //     }
// // //     y();
  
// // //   }
// // //    x();
  
// // // }
// // // //  z()
// // // const fruits = [];
// // // fruits.push("banana", "apple", "peach");
// // // // console.log(fruits.length); // 3
// // // // console.log(fruits[0]); // banana
// // // // // console.log(fruits.splice(2)); 
// // // // console.log(Object.keys(fruits)); // [0,1,2]
// // // fruits.forEach((item, index) => {
// // //   console.log(`${index}: ${item}`);
// // // });






















// //let a=50 // same const not declare in global execution(memory) it declare in seperate space(temproay daed zone)

// // {
// //   // compound statment  js is treat it as a single statment
// // }
// // if (true) {
// //   console.log("love yosy")

// // }
// // const a=20
// // {
// //   const a=50
// //   {
// //     const a=40
// //   console.log(a)

// //   }
// //   console.log(a)
// // }
// // console.log(a)
// // closure => function combined together in lecxical enviroment







// import { useState } from 'react'
// import Note from './Components/Note'


// const App = (props) => {
//   const [notes,setnotes]=useState(props.notes)
//   const [newnotes,setnwenotes]=useState("")
//   const [showAll,setshowAll]=useState(true)

//   const notesToShow = showAll  
//     ? notes   
//      : notes.filter(note => note.important === true)

//   const handelnotechange=()=>{
//     setnwenotes(event.target.value)
//     //console.log(event.target.value)
//   }



//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newnotes,
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }
  
//     setnotes(notes.concat(noteObject))
//     setnwenotes('')
//   }


//   return (
//     <div>
//       <h1>Notes</h1>
//       <div> 
//         <button onClick={()=>setshowAll(!showAll)}>
//           show {showAll? "important" :"All"}
//         </button>
//       </div>
//       <ul>
//      {notesToShow.map(note=>
//       <Note key={note.id} note={note} />)}
//      </ul>
//      <form onSubmit={addNote}>
//      <input value={newnotes}
//      onChange={handelnotechange} />
     
//      <button type="submit">save</button>

//      </form>
     
//     </div>
 
//   )
// }

// export default App 
// console.log("Start")
// document.getElementById("btn").addEventListener("click",function cb() {
//   console.log("callback")
// })
// // document.addEventListener("DOMContentLoaded", function cb() {
// //   console.log("callback")
// // });

// console.log("End")
// setTimeout(() => {
//   console.log('loop..')
//   let i = 0
//   while (i < 50000000000) {
//     i++
//   }
//   console.log('end')
// }, 5000)