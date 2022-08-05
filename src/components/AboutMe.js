import React from "react";
import htmlImg from "../images/html-svgrepo-com.svg"
import reactImg from "../images/react-svgrepo-com.svg"
import cssImg from "../images/css-svgrepo-com.svg"
import jsImg from "../images/js-svgrepo-com.svg"
import meImage from "../images/screenshotMe.png"
// import meImage from "../images/IMG_5199-removebg-preview 1.png"
export default function AboutMe (){
    return(
        
        <div className="aboutMe-container">
<div className="aboutMe--title">
            <h1 className="aboutMe--title">About Me</h1>
            </div>
            <div className="para1">
                <p className="para1">I really enjoy food, video-games and speding time with the people I care about. I am also a self taught musician. I learned how to play the guitar when I was young, mainly through youtube. I recently tried picking up piano and saxophone, though as of late, programming has taken up most of my time.</p>        
                </div>
                <div className="techUsedImg">
                    <h3 className="titleTech">Technologies I Use</h3>
                    <img src={htmlImg} className="htmlSvg" alt="no svg"></img>
                    <img src={reactImg} className="reactSvg" alt="no svg"></img>
                    <img src={cssImg} className="cssSvg" alt="no svg"></img>
                    <img src={jsImg} className="jsSvg" alt="no svg"></img>
                </div>
                <div className="meImage">
                    <img src={meImage} className="meImageClass" alt="no image"></img>

                </div>
                <div className="para2">
                <p className="para2">I am a web developer based in Los Angeles. I have spent most of my time figuring out the best way to go about how to use programming and technology to solve my everyday problems. I really enjoy the learning and satisfaction of figuring out code that solves new problems. 
                Along with web development, </p>
                </div>

        </div>
    )
}