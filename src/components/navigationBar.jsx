import React from 'react';
import './navigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" sticky="top" className='nav-area'>
            <Container>
                <Navbar.Brand href="/doghouse/"><img src="../assets/images/logo.png" alt="Company logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end flex-grow-1 pe-4" id='links'>
                            <Nav.Link className='link' href="/doghouse/">Home</Nav.Link>
                            <Nav.Link className='link' href="/doghouse/shop">Shop</Nav.Link>              
                            <Nav.Link className='link' href="/doghouse/about">About us</Nav.Link>
                            <Nav.Link className='link' href="/doghouse/contact">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}  
export default NavigationBar;