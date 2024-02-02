import React from 'react'
import './loginModal.css'

const LoginModal = (props) => {

  return (
    <div className='login-modal'>
        <form action="POST">
            <label htmlFor="login">
                Login
                <input type="text" name='login' id='login'/>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" />
            </label>
            <input type="submit" />
        </form>
        <button onClick={props.handleLoginModal}>Close</button>
    </div>
  )
}

export default LoginModal