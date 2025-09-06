import "./BottomBar.css"
import upArrow from "../assets/buttons/sidebarArrowUp.svg"
import downArrow from "../assets/buttons/sidebarArrowDown.svg"

export default function BottomBar(props){
    
    return(
        <div className="bottomButtons">
            <div className={props.objExpand ? "bottomButton invertArrow arrowButton" : "bottomButton arrowButton"} onClick={props.objHandler}>
                <img src={props.objExpand ? downArrow : upArrow} alt={props.objExpand ? "Down arrow to hide objective" : "Up arrow to show objective"}></img>
                <h3>Objective</h3>
            </div>
            <div className={props.moreRole ? "bottomButton invertArrow arrowButton" : "bottomButton arrowButton"} onClick={props.roleHandler}>
                <img src={props.moreRole ? downArrow : upArrow} alt={props.objExpand ? "Down arrow to hide additional information" : "Up arrow to show additional information"}></img>
                <h3>More on my role</h3>
            </div>
            <div className={props.extLinks ? "bottomButton invertArrow arrowButton" : "bottomButton arrowButton"} onClick={props.linkHandler}>
                <img src={props.extLinks ? downArrow : upArrow} alt={props.objExpand ? "Down arrow to hide external links" : "Up arrow to show external links"}></img>
                <h3>External Links</h3>
            </div>
            
            
        </div>
    )
}