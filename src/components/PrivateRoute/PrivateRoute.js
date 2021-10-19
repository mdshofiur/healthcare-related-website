import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';
import {Spinner} from 'react-bootstrap'
import './PrivateRoute.css'

const PrivateRoute = ({children, ...rest}) => {
  
     const {users,isLoading} = useAuth();

     if(isLoading){
         return (
            <div className="spinner">
            <Spinner animation="border" variant="info" />
             </div>
         )

     }

    return (
        <Route
        {...rest}
        render={({location}) => users.email? children: 
        <Redirect
        to={{
           pathname: "/log",
           state: { from: location }
        }}
        ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;