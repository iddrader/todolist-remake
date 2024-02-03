import React from 'react'
import welcomeImage from "../../assets/welcome.webp"
import './welcome.css'
import { useState } from 'react'
import LoginModal from '../loginModal/LoginModal'
import RegisterModal from '../registerModal/RegisterModal'
import { activeSession } from '../../api/api'


const Welcome = (props) => {
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);

  const handleLoginModal = () => {
    setLoginModalActive(prev => !prev)
  }

  const handleRegisterModal = () => {
    setRegisterModalActive(prev => !prev)
  }

  const handleBgClick = () => {
    loginModalActive ? handleLoginModal() : handleRegisterModal();
  }


  return (
    <div className='welcome'>
      
      {/* BG with 0.5 opacity */}
      {loginModalActive || registerModalActive ? 
      <div className='welcome-modal-bg' onClick={handleBgClick}></div> 
      : <></>}
      
      {loginModalActive ? 
      <LoginModal session={props.session}/>
      : <></>}

      {registerModalActive ? 
      <RegisterModal />
      : <></>}

      <img src={welcomeImage} alt="welcome image" className='welcome-img'/>
      <h2>Welcome to Tasks app!</h2>
      <p>A to-do list is just a list of things you have to-do. That means basically anything and everything can be on your to-do list—but just because you've written your to-dos down doesn't mean your to-do list is actually useful. Effectively tracking when your work is due can help you prioritize and get great work done.</p>
      
      { props.session ? <p>Welcome! you're already logged in!</p> :
      <div className="welcome-buttons">
        <button className='welcome-button' onClick={handleLoginModal}>Log In</button>
        <button className='welcome-button' onClick={handleRegisterModal}>Register</button>
      </div>}
    </div>
  )
}

export default Welcome