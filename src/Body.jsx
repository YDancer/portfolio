import Project from "./components/Project"
//import {default as projectList} from "./data/projects.json"
import ProjectAlt from "./components/ProjectAlt"

import {default as projectList} from "./data/projImport";


export default function Body(){
    // Main content
    // This includes all the various section elements
    // Such as the projects tab, personal endeavors and additional media
    // 
    const projElements = projectList.map((proj)=>{ return(
    <Project 
    name={proj.name} 
    imageDesc={proj.imageDescs}
    imageTitles={proj.imageTitles}
    objective={proj.projObj}
    moreRole={proj.moreRole}
    links={proj.links}
    imageArray={proj.imageArray}
    key = {proj.name}
    />
    )});

    const altProjElements = projectList.map((proj)=>{
        return(
            <ProjectAlt 
            name={proj.name} 
            imageDesc={proj.imageDescs}
            imageTitles={proj.imageTitles}
            objective={proj.projObj}
            moreRole={proj.moreRole}
            links={proj.links}
            imageArray={proj.imageArray}
            key = {proj.name}
            />
        )
    })
    
    return(
        <>
            {projElements}
            {altProjElements}
        </>
    )
}