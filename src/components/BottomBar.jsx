import "./BottomBar.css"
import upArrow from "../assets/sidebarArrowUp.svg"

export default function BottomBar(props){
    
    return(
        <div className="bottomButtons">
            <div className="bottomButton arrowButton">
                <img src={upArrow}></img>
                <h3>Objective</h3>
            </div>
            <div className="bottomButton arrowButton">
                <img src={upArrow}></img>
                <h3>More on my role</h3>
            </div>
            <div className="bottomButton arrowButton">
                <img src={upArrow}></img>
                <h3>External Links</h3>
            </div>
        </div>
    )
}