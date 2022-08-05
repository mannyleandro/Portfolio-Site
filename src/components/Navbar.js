import React from "react"
import MyImg from "../images/IMG_1209.png"
export default function Navbar (){
    return (
        <nav className="navbar--container">

           <a href="#home"> <img src={MyImg} alt="" className="navbar--img"/></a>
            <ul className="navbar--items">
                <li className="navbar--list-items"><a href="#projects">Projects</a></li>
                <li className="navbar--list-items"><a href="#aboutMe">About Me</a></li>
                <li className="navbar--list-items">Contact Me</li>
            </ul>
        </nav>
    )
}