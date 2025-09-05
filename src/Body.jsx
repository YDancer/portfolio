import Project from "./components/Project"
import Overview from "./components/Overview"
//import {default as projectList} from "./data/projects.json"
import ProjectAlt from "./components/ProjectAlt"
import Contact from "./components/Contact";

import {default as projectList} from "./data/projImport";


export default function Body(){
    // Main content
    // This includes all the various section elements
    // Such as the projects tab, personal endeavors and additional media
    // 
    let i = 1;
    const projElements = projectList.map((proj)=>{ 
        i++;
        if (i % 2 == 0){
            return(<Project 
                    name={proj.name} 
                    imageDesc={proj.imageDescs}
                    imageTitles={proj.imageTitles}
                    objective={proj.projObj}
                    moreRole={proj.moreRole}
                    links={proj.links}
                    imageArray={proj.imageArray}
                    key = {proj.name}
                    />)
        }else{
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
        }
    });

    // change the following 
    const extMedia = projectList.map((proj)=>{ 
        i++;
        if (i % 2 == 0){
            return(<Project 
                    name={proj.name} 
                    imageDesc={proj.imageDescs}
                    imageTitles={proj.imageTitles}
                    objective={proj.projObj}
                    moreRole={proj.moreRole}
                    links={proj.links}
                    imageArray={proj.imageArray}
                    key = {proj.name}
                    />)
        }else{
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
        }
    });

    return(
        <main>
            <Overview/>
            <hr></hr>
            <h2 style={{paddingLeft: "25px", backgroundColor: "#E8E5F0", marginBottom: "-10px", marginTop: "25px", borderRadius: "10px 10px 0 0", fontSize: "3rem"}}
            id="projects">Projects</h2>
            {projElements}
            <hr></hr>
            <h2 style={{paddingLeft: "25px", backgroundColor: (i % 2 == 0) ? "#D2F1E4" : "#E8E5F0", marginBottom: "-10px", marginTop: "25px", borderRadius: "10px 10px 0 0", fontSize: "3rem"}}
            id="extmedia">External Media</h2>
            {extMedia}
            <hr></hr>
            <Contact/>
        </main>
    )
}