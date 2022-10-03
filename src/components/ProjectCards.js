import React from "react"



export default function ProjectCard({image, info, title, live, source}){
    return(
        <div className="projectCard">
            <h3 className="projectTitle">{title}</h3>
            <p className="projectInfo">{info}</p>
            <img className="portfolioSsImage" src={image} alt="no image"></img>
           <div className="button-container">
            <button className="liveButton"><a href={live}>Live Version</a></button>
            <button className="sourceButton"><a href={source}>Source Code</a></button>
            </div>
                    </div>
    )
}