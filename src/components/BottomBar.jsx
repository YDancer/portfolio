import "./BottomBar.css"
import upArrow from "../assets/sidebarArrowUp.svg"
import downArrow from "../assets/sidebarArrowDown.svg"

export default function BottomBar(props){
    
    return(
        <div className="bottomButtons">
            <div className="bottomButton arrowButton" onClick={props.objHandler}>
                <img src={props.objExpand ? downArrow : upArrow}></img>
                <h3>Objective</h3>
            </div>
            <div className="bottomButton arrowButton" onClick={props.roleHandler}>
                <img src={props.moreRole ? downArrow : upArrow}></img>
                <h3>More on my role</h3>
            </div>
            <div className="bottomButton arrowButton" onClick={props.linkHandler}>
                <img src={props.extLinks ? downArrow : upArrow}></img>
                <h3>External Links</h3>
            </div>
        </div>
    )
}