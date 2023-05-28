import React from "react";
import "./Header.css";
import { Route } from "react-router-dom";


const Header = () => {


    return (

        <div className="header">

            <img className="header-logo" src='/img/bolt-logo.svg' alt="logo"></img>
            <ul className="header-nav">

                <li>
                    <a href="#">Generate QR Codes</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a className="text-primary" href="#">Log in</a>
                </li>
                <li>
                    <a className="signup-button" href="#">Sign up</a>
                </li>
                <li>

                    <img className="header-theme-icon" src="/img/theme-icon.svg" alt="theme-icon"></img>
                </li>

            </ul>
        </div>



    )




}

export default Header;