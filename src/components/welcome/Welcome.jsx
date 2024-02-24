import React from 'react'
import welcomeImage from "../../assets/welcome.png"
import './welcome.css'
import { useState } from 'react'
import LoginModal from '../loginModal/LoginModal'
import RegisterModal from '../registerModal/RegisterModal'
import { supabase } from '../../api/api'

const Welcome = (props) => {
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);

  const handleLoginModal = () => {
    setLoginModalActive(prev => !prev)
  }

  const handleRegisterModal = () => {
    setRegisterModalActive(prev => !prev)
  }

  async function handleDemoLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'demo@demo.com',
      password: 'demo'
    })
  }

  const handleBgClick = () => {
    loginModalActive ? handleLoginModal() : handleRegisterModal();
  }


  return (
    <div className='welcome'>
      
      {/* BG */}
      {(loginModalActive || registerModalActive) && 
      <div className='welcome-modal-bg' onClick={handleBgClick}></div> }
      
      {loginModalActive && <LoginModal session={props.session}/> }

      {registerModalActive && <RegisterModal /> }

      <div className="welcome-content">
        <h2>TASKS</h2>
        <p>A to-do list is just a list of things you have to-do. That means basically anything and everything can be on your to-do list—but just because you've written your to-dos down doesn't mean your to-do list is actually useful. Effectively tracking when your work is due can help you prioritize and get great work done.</p>
        
        <div className="welcome-buttons">
          <button className='welcome-button' onClick={handleLoginModal}>Log In</button>
          <button className='welcome-button' onClick={handleRegisterModal}>Register</button>
          <button className='welcome-button' id='demo-button' onClick={handleDemoLogin}>Demo</button>
        </div>
      </div>
        
      <img src={welcomeImage} alt="welcome image" className='welcome-img'/>
    </div>
  )
}

export default Welcome