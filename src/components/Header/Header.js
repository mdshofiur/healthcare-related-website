import React from 'react'; 
import {Container,Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../../Hook/useAuth';

  

const Header = () => {
  const {users,signouts} = useAuth()
    return (
        <div>
      <Navbar bg="info" variant="info" className="p-3">
    <Container>
    <Navbar.Brand className="fw-bold"> <NavLink exact to="/" className="text-light text-decoration-none fs-3">PsychCenter</NavLink></Navbar.Brand>
    <Nav className="fw-bold">
      <NavLink to="/home" className="text-light p-3 text-decoration-none">Home</NavLink>
      <NavLink to="/service" className="text-light p-3 text-decoration-none">Services</NavLink>
      <NavLink to="/register" className="text-light p-3 text-decoration-none">Register</NavLink>
      <NavLink to="/log" className="text-light p-3 text-decoration-none">log In</NavLink>
      <NavLink to="" className="text-light p-3 text-decoration-none">{users.displayName} </NavLink>
      <NavLink to=""className="text-light p-3">
       {users?.email && <button className="border-0 bg-info text-danger fw-bold" onClick={signouts}>log Out</button>}</NavLink>
    </Nav>
    </Container>
     </Navbar>
        </div>
    );
};

export default Header;