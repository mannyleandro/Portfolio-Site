import React from "react"
import ProjectCards from "./ProjectCards"
import portfolioImg from "../images/portfolioSS.png"
export default function Projects({info, title, image}){
    return(
            <div className="projectContainer">
                <h2 className="projectSectionTitle">Projects</h2>
            <div className="projectList">
                <ProjectCards 
                    title = "My Portfolio"
                    image = {portfolioImg}
                    info = "I am extremely proud of my portfolio website. Written using React, focusing on state and props, to sell myself to those looking to hire. "
                    live = "#home"
                />
                <ProjectCards 
                    title = "Cakes by Murr"
                    image = {portfolioImg}
                    info = "Cakes by Murr is a page used to sell a service/product. Mainly created using React, I implemented creative ideas provided to me by my client to create the website they desired for their buisness "
                />
                 
            </div>
        </div>
    )
}
