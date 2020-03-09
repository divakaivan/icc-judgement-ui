import React from "react";
import {NavLink} from "react-router-dom";
import Signout from "../auth/Signout";

const Navbar = ({session}) => (
    <nav>
        {session && session.getCurrentUser ? <NavbarAuth session={session}/> : <NavbarUnAuth/>}
    </nav>
);

const NavbarUnAuth = () => (
    <ul>
        <li>
            <NavLink to='/' exact>Home</NavLink>
        </li>
        <li>
            <NavLink to='/search'>Search</NavLink>
        </li>
        <li>
            <NavLink to='/signin'>Sign in</NavLink>
        </li>
        <li>
            <NavLink to='/signup'>Sign up</NavLink>
        </li>
    </ul>
);

const NavbarAuth = ({session}) => (
    <React.Fragment>
        <ul>
            <li><NavLink to='/' exact>Home</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li>
                <Signout/>
            </li>
        </ul>
        <h4>Welcome , <strong>{session.getCurrentUser.summonerName}</strong></h4>
    </React.Fragment>
);


export default Navbar;