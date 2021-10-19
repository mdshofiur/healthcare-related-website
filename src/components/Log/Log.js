import React from 'react';
import useAuth from '../../Hook/useAuth';


const Log = () => {
     
   const {signinWithGoogle} = useAuth();
    
    return (
        <div className="container mt-5 mb-5">
           <form>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
       </div>
       <div className="form-group form-check">
       </div>
       <button type="submit" className="btn btn-primary">Log In</button>
         <span className="ms-3">Or</span>
      <button onClick={signinWithGoogle} className="btn btn-primary ms-5">Log In with Gooogle</button>
       </form>

        </div>
    );
};

export default Log;