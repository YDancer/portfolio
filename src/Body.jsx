import Project from "./components/Project"
import Overview from "./components/Overview"
//import {default as projectList} from "./data/projects.json"
import ProjectAlt from "./components/ProjectAlt"
import Contact from "./components/Contact";


import {default as projectList} from "./data/projImport";
import {default as mediaList} from "./data/otherMediaImport";

export default function Body(){
    // Main content
    // This includes all the various section elements
    // Such as the projects tab, personal endeavors and additional media
    // 

    // below is generating the sections (projects and external media)
    let i = 0;
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
                    linkHeader={proj.linkHeader}
                    imageArray={proj.imageArray}
                    solo = {proj.solo}
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
                linkHeader={proj.linkHeader}
                imageArray={proj.imageArray}
                solo = {proj.solo}
                key = {proj.name}
                />
             )
        }
    });

    let j = i;
    // change the following 
    const extMedia = mediaList.map((proj)=>{ 
        i++;
        if (i % 2 == 0){
            return(<Project 
                    name={proj.name} 
                    imageDesc={proj.imageDescs}
                    imageTitles={proj.imageTitles}
                    objective={proj.projObj}
                    moreRole={proj.moreRole}
                    links={proj.links}
                    linkHeader={proj.linkHeader}
                    imageArray={proj.imageArray}
                    key = {proj.name}
                    solo = {proj.solo}
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
                linkHeader={proj.linkHeader}
                imageArray={proj.imageArray}
                key = {proj.name}
                solo = {proj.solo}
                />
             )
        }
    });

    return(
        <main>
            <Overview/>
            <hr></hr>
            <div style={{backgroundColor : "#D2F1E4", borderRadius: "10px 10px 0 0", position: "relative", zIndex: "1"}}>
                <h2 id="projects">Projects</h2>
            </div>
            {projElements}
            <hr></hr>
            <div style={{backgroundColor: (j % 2 == 0) ? "#D2F1E4" : "#E8E5F0", borderRadius: "10px 10px 0 0", position: "relative", zIndex: "1"}}>
                <h2 id="extmedia">External Media</h2>
            </div>
            {extMedia}
            <hr></hr>
            <Contact/>
        </main>
    )
}