import React from "react";
import Signout from "../auth/Signout";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavBar = ({session}) => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/'>Fields of Justice</Navbar.Brand>
        {session && session.getCurrentUser ? <NavbarAuth/> : <NavbarUnAuth/>}
    </Navbar>
);

const NavbarUnAuth = () => (
    <Nav className='mr-auhref'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/search'>Search</Nav.Link>
        <Nav.Link href='/signin'>Sign in</Nav.Link>
        <Nav.Link href='/signup'>Sign up</Nav.Link>
    </Nav>
);

const NavbarAuth = () => (
    <React.Fragment>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/search'>Search</Nav.Link>
        <Nav.Link href='/profile'>Profile</Nav.Link>
        <Signout/>
    </React.Fragment>
);


export default NavBar;