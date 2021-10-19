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
      {users?.email && <button className="btn fw-bold text-light"onClick={signouts}>log Out</button>}
    </Nav>
    </Container>
     </Navbar>
        </div>
    );
};

export default Header;