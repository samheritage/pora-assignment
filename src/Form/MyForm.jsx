import React from 'react'
import { useState } from 'react'
import './style.css';

 function MyForm() {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [aboutme, setAboutme] = useState("");

  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(firstname,lastname,email,aboutme);
  }
  return (
    <div>
    <form className='form-container' onSubmit={handleSubmit}>
       <div className='form-body'><label>First Name:</label>
        <input 
       type='text'
       value={firstname}
       onChange={(e) => {setFname(e.target.value);}}
       />
       </div>
       <div className='form-body'><label>Last Name:</label>
        <input type='text'
         value={lastname}
         onChange={(e) => {setLname(e.target.value);}}
        />
        </div> 
        <div className='form-body'><label>Email:</label>
        <input type='email' 
        value={email}
        onChange={(e) => {setEmail(e.target.value);}}
        />
        </div>
        <div className='form-body'><label>Something about me:</label>
        <input type='textarea'
        value={aboutme}
        onChange={(e) =>{setAboutme(e.target.value);}}
        />
        </div> 
        <input type='submit' value='Submit' className='form-button'/>
    </form>
</div>
  )
}
export default MyForm