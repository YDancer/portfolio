import "./Sidebar.css"
import downArrow from "../assets/sidebarArrowDown.svg"

export default function Sidebar(props){
    
    return(
        <aside className="sidebarContainer">
            <div className="sidebarHeader">
                <h3>{props.sidebarTitle}</h3>
                <img src={downArrow} className="arrowButton" onClick={props.clickHandler}></img>
            </div>
            <p>{props.sidebarContent}</p>
        </aside>
    )
}