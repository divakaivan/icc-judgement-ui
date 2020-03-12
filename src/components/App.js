import React from 'react';
import './App.css';
import {Button} from "react-bootstrap";
import NavBar from "./shared/Navbar";

const App = ({session}) => {

    return (
        <div className="align-content-center text-center container-fluid">
                <h4 className="neon ">Welcome, {session && session.getCurrentUser ? session.getCurrentUser.summonerName : "summoner"}! <br/>To the <br/>Fields of Justice</h4>
                <h6 className="neon-right">
                    Wanna remove toxic players? <br/>
                    {session && session.getCurrentUser ?
                        <Button variant="danger" href='/cases'>Cases</Button> :
                        <Button variant="danger" href='/signup'>Sign up</Button>
                    }
                </h6>
        </div>
    );
};

export default App;
