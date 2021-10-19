import React from 'react';
import useAuth from '../../Hook/useAuth';
import { useEffect } from 'react';
import {useLocation,useHistory} from 'react-router-dom'
import { getAuth,onAuthStateChanged } from "firebase/auth";

const Log = () => {
     

   const {signinWithGoogle,setemail,setpassword,hanglelogin,error} = useAuth();

   const locations = useLocation();
   const history = useHistory()
   const url = locations.state?.from || '/home';
  

    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, user => {
          if (user) {
            history.push(url)
          }
        })

  }, [auth,url]);


    const hangleEmailChange = (e)=> {
      setemail(e.target.value)
       
    }
    const hanglePasswordChange = (e)=> {
      setpassword(e.target.value)
    }

    
    return (
        <div className="container mt-5 mb-5">
           <form onSubmit={hanglelogin}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input onChange={hangleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onBlur={hanglePasswordChange} type="password" className="form-control" id="exampleInputPassword1"/>
        <p className="text-danger">{error}</p>
       </div>
       <div className="form-group form-check">
       </div>
       <button type="submit" className="btn btn-primary">Log In</button>
         <div className="ms-3 p-2">Or</div>
       </form>
       <button onClick={signinWithGoogle} className="btn btn-primary">Log In with Google</button>
        </div>
    );
};

export default Log;