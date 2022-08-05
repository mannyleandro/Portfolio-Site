import React from "react";
import MyImg from "../images/IMG_1209.png"
import Navbar from "./Navbar";

export default function Home (){
    return (
        <div className="home-container">
            <Navbar />
            <div className="home--main">
                <h1 className="home--name slide-right">Welcome,<br/> I'm Manny Sanchez</h1>
                <img src={MyImg} className="home--image" alt=""/>
                <h2 className="home--jobDesc">A Frontend Developer</h2>
            </div>
        </div>
    )
}