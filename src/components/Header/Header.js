import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <Container className='mt-3'>
            <div className='bg-gray p-4 m-0 header-container'><h2>Welcome To Programming Learning School</h2>
                <h6>“Programming isnt about what you know; its about what you can figure out.” — Chris Pine</h6></div>


            <Navbar expand="lg nav-container">
                <Container>

                    <NavLink as={Link} to="/address">Registration</NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/home">Home</NavLink>
                            <NavLink as={Link} to="/about">About</NavLink>

                            <NavLink as={Link} to="/services">Services</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>


        </Container >

    );
};

export default Header;