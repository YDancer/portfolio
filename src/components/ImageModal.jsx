import "./ImageModal.css"
import React from "react"
import leftArrow from "../assets/arrow1Left.svg"
import rightArrow from "../assets/arrow1Right.svg"

export default function ImageModal(props){
    
    return(
    <>
        <div className="ImageModalOverlay">
            <button onClick={props.overlayHandler}>X</button>
            <div className="ImageModalHeader">
                <h2>Cat Image</h2>
            </div>
            {props.imageElements[props.currentIndex]}
            <div className="ImageModalFooter">
                <img className="slideshowLeftArrow" src={leftArrow} alt="Left Arrow" onClick={props.leftHandler}></img>
                {props.imageElements}
                <img className="slideshowRightArrow" src={rightArrow} alt="Right Arrow" onClick={props.rightHandler}></img>
                
            </div>
        </div>
        <div className="ImageModalBackground" onClick={props.overlayHandler}>
        </div>
    </>
)
} 