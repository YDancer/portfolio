import "./Sidebar.css"
import downArrow from "../assets/buttons/sidebarArrowDown.svg"

export default function Sidebar(props){
    
    return(
        <aside className="sidebarContainer">
            <div className="sidebarHeader">
                <h3>{props.sidebarTitle}</h3>
                {!props.isAlt && <img src={downArrow} className="arrowButton" onClick={props.clickHandler}></img>}
            </div>
            <p>{props.sidebarContent}</p>
        </aside>
    )
}