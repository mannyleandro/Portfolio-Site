import React from "react"
import Projects from "./Projects"


export default function ProjectCard({image, info, title}){
    return(
        <div className="projectCard">
            <h3 className="projectTitle">{title}</h3>
            <p className="projectInfo">{info}</p>
            <img className="portfolioSsImage" src={image} alt="no image"></img>
            
        </div>
    )
}