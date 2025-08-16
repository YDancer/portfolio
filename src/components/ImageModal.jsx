import "./ImageModal.css"
import React from "react"

export default function ImageModal(props){
    
    return(
    <>
        <div className="ImageModalOverlay">
            <div className="ImageModalHeader">
                <h2>Cat Image</h2>
            </div>
            {props.imageElements[props.currentIndex]}
            <div className="ImageModalFooter">
                {props.imageElements}
            </div>
        </div>
        <div className="ImageModalBackground" onClick={props.overlayHandler}>
        </div>
    </>
)
} 