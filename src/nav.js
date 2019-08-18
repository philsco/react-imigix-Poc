import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class MainNav extends Component {
  constructor(props) {
    super(props);
     this.state = { 
       images: [],
       settings: []
     }
    }

    render() {
        return (

          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Imgix PoC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Gallery</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
                <Nav.Link href="/export">Export</Nav.Link>
                <Nav.Link href="/focal">Focal Test</Nav.Link>
              </Nav>
              </Navbar.Collapse>       
          </Navbar>
          
        )
    }
}

export default MainNav;
