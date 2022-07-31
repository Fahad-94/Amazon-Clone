import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useState, } from 'react';
import { UserAuth } from '../context/AuthContext';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const {signIn} = UserAuth();

    const login = async (e) => {
        e.preventDefault();

        await signIn(email, password);
        
        history.push('/');
        
    }
    

  return (
    <div className='login'>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' alt='' id='login-logo' />
        </Link>

        <div className='user-info-div'>
            <div className='input-div'>
            <p>E-mail</p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

            <p>Password</p>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button id='login-btn' type='submit' onClick={login}>Sign In</button>

            <p id='para'>By signing-in you agree to Amazon's Conditions of 
            Use & Sales. Please see our Privacy Notice, our 
            Cookies Notice and our Interest-Based Ads Notice.</p>

            
            
        </div>
        <p>New to Amazon? <Link to='/register'>Create Amazon Account here</Link></p>
    </div>
  )
}

export default Login