import React from "react";
import {Link, Outlet} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = () =>{
    return(
        <>
        <Navbar expand = "lg" className="bg-body-tertiary">
            <Container className= 'navbar'>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="Programme">
                        Programme
                    </Nav.Link>
                    <Nav.Link as={Link} to="order">
                        Order
                    </Nav.Link>
                    <Nav.Link as={Link} to ="contactUs">
                        Contact Us
                    </Nav.Link>
                    <Nav.Link as={Link} to = "My Itinerary">
                        Staff Login
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Outlet/>
            </Container>
        </Navbar>
        </>
    );
};

export default Navigation;