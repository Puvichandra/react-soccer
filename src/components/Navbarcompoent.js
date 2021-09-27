import React, { Component } from 'react'
import  {Nav, Navbar} from 'react-bootstrap'
import logoimg from "../assets/img/logosoccer.jpg"
import {LinkContainer} from 'react-router-bootstrap'


 

export default class Navbarcompoent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg" style={{ paddingLeft:'200px', paddingRight:'200px' }}>
  

 
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logoimg}
          width="100"
          height="80"
          className="d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>



  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ms-auto my-0 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >

      <LinkContainer to="/">
      <Nav.Link className="px-3">Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/Roadmap">
      <Nav.Link className="px-3">Roadmap</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/Roadmap">
      <Nav.Link className="px-3" >Mint</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/team">
      <Nav.Link className="px-3">Team</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/contact">
      <Nav.Link className="px-3" >Contact</Nav.Link>
      </LinkContainer>
           
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
                
            </div>
        )
    }
}
