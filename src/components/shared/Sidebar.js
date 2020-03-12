import React from "react";
import "../../static/sidebar.css";

const Sidebar = props => {

    return (
        <div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="navbar-collapse sidebar">
                <header>My Menu</header>
                <a className="nav-link1" href="/"><i className="fas fa-qrcode"></i><span>Home</span></a>
                <a className="nav-link1" href="/cases"><i className="fas fa-link"></i><span>Cases</span></a>
                <a className="nav-link1" href="/signup"><i className="fas fa-stream"></i><span>Overview</span></a>
                <a className="nav-link1" href="/profile"><i className="fas fa-calendar"></i><span>Cases</span></a>
                <a className="nav-link1" href="#"><i className="fas fa-question"></i><span>Profile</span></a>

            </div>
        </div>
    )
};

export default Sidebar;
