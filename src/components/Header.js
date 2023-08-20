import React from "react";
import logo from "../assets/logo";

function Header (props) {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>{props.name}</h1>

        </header>
    );

}

export default Header;