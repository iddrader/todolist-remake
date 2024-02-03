import React from 'react'
import './registerModal.css'
import { supabase } from '../../api/api';

const RegisterModal = () => {

    async function register(event) {
        event.preventDefault();
        const form = event.target.form;
        if (form.password1.value != form.password2.value) return;

        const { data, error } = await supabase.auth.signUp({
            email: form.login.value,
            password: form.password1.value,
        })

        if(error){
            alert(error)
        } else {
            alert("Registered successfully! Please confirm your email")
        }
    }

  return (
    
    <div className='register-modal'>
        <form action="">
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
            <input type="submit" onClick={register}/>
        </form>
    </div>
  )
}

export default RegisterModal