import React from "react";
import Signout from "../auth/Signout";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Sidebar from "./Sidebar";

const NavBar = ({session}) => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/'>Fields of Justice</Navbar.Brand>
        <Sidebar/>
        {session && session.getCurrentUser ? <NavbarAuth/> : <NavbarUnAuth/>}
    </Navbar>
);

const NavbarUnAuth = () => (
    <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/cases'>Cases</Nav.Link>
        <Nav.Link href='/signin'>Sign in</Nav.Link>
        <Nav.Link href='/signup'>Sign up</Nav.Link>
    </Nav>
);

const NavbarAuth = () => (
    <React.Fragment>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/search'>Cases</Nav.Link>
        <Nav.Link href='/profile'>Profile</Nav.Link>
        <Signout/>
    </React.Fragment>
);


export default NavBar;