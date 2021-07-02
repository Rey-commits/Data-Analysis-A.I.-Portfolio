import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Navigation() {
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <LinkContainer to="/">
                    <Navbar.Brand className="navbar-brand">
                    Rey-commits
                    {/* <span className="navbar-copyright"><i class="fas fa-trademark"></i></span> */}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navlinks">
                        <LinkContainer to="/">
                            <Nav.Link className="navlink-item">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/AI">
                            <Nav.Link className="navlink-item">Machine Learning</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/app-projects">
                            <Nav.Link className="navlink-item">Web Apps</Nav.Link> 
                        </LinkContainer>
                        <LinkContainer to="/books">
                            <Nav.Link className="navlink-item">Library</Nav.Link> 
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="navlink-item">About</Nav.Link>
                        </LinkContainer>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       
    )
}

export default Navigation
