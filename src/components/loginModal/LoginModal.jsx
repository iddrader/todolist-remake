import React, { useContext } from 'react'
import './loginModal.css'
import { supabase } from '../../api/api.js'
import { useState } from 'react'


const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const form = event.target.form;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.login.value,
      password: form.password.value
    })

    if(error) alert(error)
  }

  return (
    <div className='login-modal'>
      { props.session ? <h3>"You have successfully logged in!"</h3> :
        <form action="">
            <label htmlFor="login">
                Login
                <input type="email" name='login' id='login'/>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" />
            </label>
            <input type="submit" onClick={handleLogin}/>
        </form>}
    </div>
  )
}

export default LoginModal