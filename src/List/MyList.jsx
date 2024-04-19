import React from 'react'

 function MyList() {
  return (
    <div>MyList
        <div>Another List</div>
        <h2>list of names</h2>
        { listnames.map((item) => (
          <h1 key={item.id}>{item.age} {item.color}</h1>
        ))    
        }
        <h1>{list[0]}</h1>
        <h2>{ list.map((item) => (
         <h3>{item}</h3> 
        ))    
        }</h2>

<div>
    <div>Say Something!!!</div>
    <form>
       <div><label>First Name: <input 
       type='text' 
       name='firstname'
       /></label></div> 
       <div><label>Last Name: <input type='text' name='lastname'/></label></div> 
        <div><label>E-mail: <input type='email' name='email'/></label></div>
        <div><input type='submit' name='Submit'/></div>
    </form>
</div>
    </div>
    
    
  )
}
// function listForm() {
//   // const [fname, setFName]= useState("")
//   //  const [lname, setLName]= useState("")
//   //  const [password, setPassword]= useState("")
//  return (
//    <div> My Form 
//        <div>Say Something!!!</div>
//        <form>
//           <div><label>First Name:
//            <input 
//           type='text' 
//           name='firstname'
//           // value ={fname}
//           // onChange={(e)=> {setFName(e.target.value)}}
//           />
//           </label></div> 
//           <div><label>Last Name:<input type='text' name='lastname'/></label></div> 
//            <div><label><input type='email' name='email'/></label></div>
//            <div><input type='submit' name='Submit'/></div>
//        </form>
//    </div>
//      )
// }
export default MyList


const list = ["ayo", "sade", "titi"]

const listnames = [
{id:1, name:"ayo", age:20, color:'red'},
{id:2, name:"sade", age:21, color:'blue'},
{id:3, name:"titi", age:22, color:'green'},
]
