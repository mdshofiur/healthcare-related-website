import React from 'react';
import { useState } from 'react';
import initializeAuth from '../../Firebase/Firebaseinit';
import useAuth from '../../Hook/useAuth';
import {useLocation,useHistory} from 'react-router-dom'


initializeAuth();
const Register = () => {

  const locations = useLocation();
  const history = useHistory()
  const url = locations.state?.from || '/home';

  const {SignUpwithGoogle,setemail,setpassword,hanglesignup,hanglelogin,error,setLoading,setuser,seterror} = useAuth();


    const GoogleSignUp = (e)=>{
       e.preventDefault()
      hanglesignup()
      .then((result) => {
        seterror('')
        setuser(result.user)
        history.push(url)
      })
      .catch(() => {
       seterror('Email Already Used')
      });
    }


    const loginFunc = (e)=> {
      e.preventDefault()
      hanglelogin()
      .then((result) => {
        setuser(result.user)
         history.push(url)
      })
      .catch((error) => {
        seterror("Pasword or Email is wrong")
      });
    }


  const GoogleHandler = ()=>{
    SignUpwithGoogle()
   .then((result) => {
   history.push(url)
  })
  .finally(() => setLoading(false));
}

    const[islogin,setislogin] = useState(false);

    const hangleEmailChange = (e)=> {
        setemail(e.target.value)
      }
      const hanglePasswordChange = (e)=> {
        setpassword(e.target.value)
      }

      const togglelogin = e => {
        setislogin(e.target.checked);
      }
      
     

    return (
        <div className="container mt-5 mb-5">
        <form onSubmit={islogin?loginFunc:GoogleSignUp}>
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
       <span className="ms-5">or</span>
       <button onClick={GoogleHandler} className="btn btn-primary mt-3 ms-5">Log In with Google</button>
       </form>
      
        </div>
        
    );

};

export default Register;