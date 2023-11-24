"use client";
import React , {useState} from 'react'
import './App.css'
const page = () => {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const handlerUser = (e)=>{
    setUsername(e.target.value)
  }
  const handlerPass = (e)=>{
    setPass(e.target.value)
  }
  const handlerEmail = (e)=>{
    setEmail(e.target.value)
  }
  
  const register = () => {

   
    console.log("Username : ",username)
    console.log("Email    : ",email)
    console.log("Password : ",pass)
  }



  return (
    
    <div className='grid justify-center align-middle mt-[150px]'>
      <div className="control">
        <h1>Register</h1>
      </div>
      <div className="control block-cube block-input">
        <input name="username" type="text" placeholder="Username" id="usernameInput" onChange={handlerUser} />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="email" type="email" placeholder="email" id="emailInput" onChange={handlerEmail} />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" id="passwordInput" onChange={handlerPass} />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>

      <button className="btn block-cube block-cube-hover" onClick={() => register()}>
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">Register</div>
      </button>
    </div>
    
  )
}

export default page;
