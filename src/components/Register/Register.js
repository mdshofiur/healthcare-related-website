import React from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../../Firebase/Firebaseinit';
import {useLocation,useHistory} from 'react-router-dom'


initializeAuth();
const Register = () => {
  const locations = useLocation();
  const history = useHistory()
  const url = locations.state?.from || '/home';

    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');
    const[islogin,setislogin] = useState(false);
    const[error,seterror] = useState('');

    const hangleEmailChange = (e)=> {
        setemail(e.target.value)
         
      }
      const hanglePasswordChange = (e)=> {
        setpassword(e.target.value)
      }

      const togglelogin = e => {
        setislogin(e.target.checked);
      }
      
     
      const hanglesignup = (e) => {
        e.preventDefault()
      
        if(password.length < 6){
          seterror("Pass Must be 6")
          return;
        }
      
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
              seterror("Set minimum One Uppercase");
              return;
        }
      
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          seterror('')
        })
        .catch(() => {
         seterror('Email Already Used')
        });
        
      }

      const hanglelogin = (e) => {
        e.preventDefault()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          history.push(url)
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

    return (
        <div className="container mt-5 mb-5">
        <form onSubmit={islogin?hanglelogin:hanglesignup}>
        <h3>{islogin ? "Log in":"Sign Up"}</h3>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input onChange={hangleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1" required>Password</label>
        <input onBlur={hanglePasswordChange} type="password" className="form-control" id="exampleInputPassword1"/>
        <p className="text-danger">{error}</p>
       </div>
       <div className="form-group form-check">
       <input onChange={togglelogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
       <label className="form-check-label" htmlFor="exampleCheck1">Already Register in?</label>
       </div>
       <button type="submit" className="btn btn-primary mt-3">{islogin ? "Log in":"Sign Up"}</button>
       </form>
        </div>
    );
};

export default Register;