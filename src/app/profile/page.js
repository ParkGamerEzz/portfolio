"use client";
import React , {useState} from 'react'
import './App.css'
import { CardUser } from '@/components';

const page = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [save, setSave] = useState(false);

  const handlerUser = (e)=>{
    setUsername(e.target.value)
  }

  const handlerEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlerSave = (e)=>{
    setSave(true)
  }

  const handlerBack = (e)=>{
    setSave(false)
  }
  
  
  
  const register = () => {

   
    console.log("Username : ",username)
    console.log("Email    : ",email)
  }


  return (
    
    <div className='grid justify-center align-middle mt-[150px]'>
      {
        !save &&
        <div>
      
      <div className="control">
        <h1>Profile</h1>
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
      <button className="btn block-cube block-cube-hover" onClick={() => handlerSave()}>
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">Save</div>
      </button>
      </div>
      
      }
      {
        
        save &&
        <div>
      <CardUser name={username} email={email} age={0} address={0}/>
      <div>
        <button className="btn block-cube block-cube-hover mt-20" onClick={() => handlerBack()}>
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Go Back</div>
        </button>
      </div>
    </div>
       
    
      }
      
    </div>
    
    
  )
}

export default page;
