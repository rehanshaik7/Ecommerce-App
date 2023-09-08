import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


function Login() {
     const history=useNavigate();
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

     const signIn = e=>{

      e.preventDefault();             
                   
      auth
      .signInWithEmailAndPassword(email, password)
       .then(auth=>{
        history('/')
       })
       .catch(error =>alert(error.message))

     }

      const register = e=> {
            e.preventDefault();
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
               
                
                   if(auth){
                     history('/');
                  
                   }
                
            })
            .catch(error => alert(error.message))
      }
       


  return (
    <div className='login'>
        <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                     onChange={e=>setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type='password'
                    value={password} onChange={e=> setPassword(e.target.value)}
                    />

                    <button className='login_signinbutton'
                    type='submit' onClick={signIn}
                    >Sign in </button>
                    <p className='login_para'>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                  <button className='login_registerButton'
                  onClick={register} 
                  
                  >Create your Amazon Account</button>
                </form>
            </div>

    </div>
  )
}

export default Login
