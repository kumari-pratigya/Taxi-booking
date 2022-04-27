import React,{useContext} from 'react'
import { Navbar, Nav,  NavDropdown,Container } from 'react-bootstrap';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {BsGlobe} from 'react-icons/bs'
import {CgMenuGridO} from 'react-icons/cg'
import {BsPersonFill} from 'react-icons/bs';
import IMAGES from '../../img/Image';
import {firstname} from '../Login/Login'; 

const NavbarRouting = () => {
  
  const login= useContext(firstname);
   console.log(login);
   
  return (
    <>
<Navbar className='navbar'  expand="lg">
  <Container fluid>
    <Navbar.Brand className='navbrand' ><img src={IMAGES.Logo}/></Navbar.Brand>
    <Navbar.Toggle bg="light" aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0 "   navbarScroll   >
        
        <NavLink className="dropdown"  to="/dropdown">
        <NavDropdown  className='dropdown' title="Company" id="navbarScrollingDropdown" >
          <NavDropdown.Item  href="#action3">About us</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Offering</NavDropdown.Item>
          <NavDropdown.Item href="#action4">How Uber working</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Global Citizenship</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Newsroom</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Invester Relation</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Careers</NavDropdown.Item>
          <NavDropdown.Item href="#action5"> Something else here </NavDropdown.Item>
        </NavDropdown>
        </NavLink>
        <NavLink className="safety" to="/safety">Safety</NavLink>
        <NavLink className="Help" to="/help">  Help</NavLink>
        <NavLink className="covid " to="/covid">Covid 19 resources</NavLink>
        </Nav>
   <NavLink className="global" to="/global"> <a><BsGlobe/> En</a></NavLink>
   <NavLink className="products" to="/products">  <a> <CgMenuGridO/>  Products</a> </NavLink>
  
   {login===false?
   <NavLink className="Login" to="/login"> <a><BsPersonFill/> Login</a></NavLink>
:<>
   <NavLink className="Login" to="/logout"> <a><BsPersonFill/> logout</a></NavLink> 
   </>
   }
   <NavLink className="signup" to="/signup"> <a>SignUp</a></NavLink>
    
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default NavbarRouting
