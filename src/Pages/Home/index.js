import React from "react";
import "./index.css"





const Home = () => {


    return (

        <div className="hero">
            <div className="hero-content">

                <h2><span className="text-primary">Strikingly fast</span> QR codes.</h2>
                <p>You are one Bolt away from never being too slow again</p>
                <button className="generateqr-button">Generate QR Codes</button>
                <button className="signup-button">Sign up</button>
            </div>

<img className="hero-image" src="/img/qr-code-purchase.png" alt="hero-img"></img>

        </div>

    )




}

export default Home;