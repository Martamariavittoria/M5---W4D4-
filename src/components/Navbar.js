import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">EpicBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

console.log("Rendering CustomNavbar...");

export default CustomNavbar;