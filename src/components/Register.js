import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

function Register() {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {createUser} = UserAuth();

    const history = useHistory();

    const registerUser = async (e) => {
        e.preventDefault();

        await createUser(email, password)
        history.push('/');
        
    };
    
    

  return (
    <div className='register'>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' alt='' id='register-logo' />
        </Link>

        <div className='user-info-div'>
            <div className='input-div'>
            <p>E-mail</p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

            <p>Password</p>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>


            <p id='para'>By joining us you agree to Amazon's Conditions of 
            Use & Sales. Please see our Privacy Notice, our 
            Cookies Notice and our Interest-Based Ads Notice.</p>
            <button id='reg-btn' onClick={registerUser}>Create your Amazon Account</button>
        </div>
        <p>Already have an account? <Link to='/login'>sign in here</Link></p>
    </div>
  )
   
}

export default Register