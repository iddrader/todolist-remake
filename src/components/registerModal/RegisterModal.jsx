import React from 'react'
import './registerModal.css'

const RegisterModal = (props) => {
  return (
    <div className='register-modal'>
        <form action="POST">
            <label htmlFor="login">
                Login
                <input type="text" name='login' id='login'/>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name="password1" id="password1" />
            </label>
            <label htmlFor="password">
                Confirm Password
                <input type="password" name="password2" id="password2" />
            </label>
            <input type="submit" />
        </form>
        <button onClick={props.handleRegisterModal}>Close</button>
    </div>
  )
}

export default RegisterModal