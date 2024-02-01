import React from 'react'
import welcomeImage from "../../assets/welcome.webp"
import './welcome.css'
import { useState } from 'react'

const Welcome = () => {
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);


  return (
    <div className='welcome'>
      
      {loginModalActive || registerModalActive ? <div className='welcome-modal-bg'></div> : <></>}
      
      {loginModalActive ? 
      <div className='welcome-modal'>

      </div> : <></>}

      {registerModalActive ? 
      <div className='welcome-modal'>

      </div> : <></>}

      <img src={welcomeImage} alt="welcome image" className='welcome-img'/>
      <h2>Welcome to Tasks app!</h2>
      <p>A to-do list is just a list of things you have to-do. That means basically anything and everything can be on your to-do list—but just because you've written your to-dos down doesn't mean your to-do list is actually useful. Effectively tracking when your work is due can help you prioritize and get great work done.</p>
      <div className="welcome-buttons">
        <button onClick={() => setLoginModalActive((prev) => !prev)}>Log In</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Welcome