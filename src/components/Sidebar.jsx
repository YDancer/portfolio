import "./Sidebar.css"
import upArrow from "../assets/sidebarArrowUp.svg"

export default function Sidebar(props){
    
    return(
        <aside className="sidebarContainer">
            <div className="sidebarHeader">
                <h3>{props.sidebarTitle}</h3>
                <img src={upArrow} className="arrowButton" onClick={props.clickHandler}></img>
            </div>
            <p>{props.sidebarContent}</p>
        </aside>
    )
}