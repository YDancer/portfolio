import Project from "./components/Project"
import {default as projectList} from "./data/projects.json"

export default function Body(){
    // Main content
    // This includes all the various section elements
    // Such as the projects tab, personal endeavors and additional media
    // 
    let projElements = [];

    function createProjects(projObj, index1){
    }

    projectList.forEach(createProjects)

    
    return(
        <>
            <Project/>
        </>
    )
}