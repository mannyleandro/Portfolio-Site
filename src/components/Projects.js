import React from "react"
import ProjectCards from "./ProjectCards"

import data from "../projectsData"

console.log(data);
export default function Projects({info, title, image}){
    const projects = data.map(function (item) {
            return (
                <ProjectCards
                    {...item} />
            );
        })

    return(
            <div className="projectContainer">
                <h2 className="projectSectionTitle">Projects</h2>
            <div className="projectList">
                {projects}
            </div>
        </div>
    )
}
