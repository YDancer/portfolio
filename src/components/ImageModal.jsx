import "./ImageModal.css"
import React from "react"
import leftArrow from "../assets/buttons/arrow1Left.svg"
import rightArrow from "../assets/buttons/arrow1Right.svg"
import closeButton from "../assets/buttons/closeButton.svg"

export default function ImageModal(props){
    // image display
    const [currentIndex, setCurrentIndex] = React.useState(props.currentIndex);
    let leftImageElements = [];
    let rightImageElements = [];

    // leftImages for left of the current shown image
    // rightImages for right of current shown image
    // selected image is outlined via span

    function spliceArray(arrayLeft, arrayRight){
        leftImageElements = [];
        rightImageElements = [];
        for (let i = 0; i < props.imageElements.length; i++){
            if (i < currentIndex){
                leftImageElements.push(props.imageElements[i]);
            } else if(i>currentIndex){
                rightImageElements.push(props.imageElements[i]);
            }
        }
    }
    
    function leftImage(){ // When the left arrow is clicked
        setCurrentIndex((prevValue)=>{
            return(props.recomputeImage(false, prevValue))
        })
        spliceArray();
    }

    function rightImage(){ // When the right arrow is clicked
        setCurrentIndex((prevValue)=>{
            return(props.recomputeImage(true, prevValue))
        })
        spliceArray();
    }

    spliceArray();

    return(
    <>
        <div className="ImageModalOverlay" style={{backgroundColor: props.isAlt ? "#D2F1E4" : "#E8E5F0"}}>
            <div className="ImageModalHeader">
                <img src={closeButton} className="arrowButton" alt="Close button" onClick={props.overlayHandler}></img>
                <h2>{props.imageTitles[currentIndex]}</h2>
            </div>
            {props.imageElements[currentIndex]}
            <div className="ImageModalFooter">
                <img className="slideshowLeftArrow arrowButton" src={leftArrow} alt="Left Arrow" onClick={leftImage}></img>
                <div className="smallLeftContainer">
                    {leftImageElements}
                </div>
                <div className="overlaySlideshowSelected">{props.imageElements[currentIndex]}</div>
                <div className="smallRightContainer">
                    {rightImageElements}
                </div>
                <img className="slideshowRightArrow arrowButton" src={rightArrow} alt="Right Arrow" onClick={rightImage}></img>
                
            </div>
        </div>
        <div className="ImageModalBackground" onClick={props.overlayHandler}>
        </div>
    </>
)
} 