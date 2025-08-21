import "./ImageModal.css"
import React from "react"
import leftArrow from "../assets/arrow1Left.svg"
import rightArrow from "../assets/arrow1Right.svg"
import closeButton from "../assets/closeButton.svg"

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
        <div className="ImageModalOverlay">
            <div className="ImageModalHeader">
                <img src={closeButton} className="arrowButton" alt="Close button" onClick={props.overlayHandler}></img>
                <h2>{props.imageTitles[currentIndex]}</h2>
            </div>
            {props.imageElements[currentIndex]}
            <div className="ImageModalFooter">
                <img className="slideshowLeftArrow arrowButton" src={leftArrow} alt="Left Arrow" onClick={leftImage}></img>
                {/**This is actually gonna be a lot more complicated
                 * So what the ideal method is, if the number of images exceeds the container size
                 * then the slideshow should be somehwat cyclic
                 * otherwise it should remain fixed and just highlight the image that it is on
                 * 
                 * I don't believe I have learned enough to be able to do that as of right now
                 */}
                {leftImageElements}
                <span className="overlaySlideshowSelected">{props.imageElements[currentIndex]}</span>
                {rightImageElements}
                <img className="slideshowRightArrow arrowButton" src={rightArrow} alt="Right Arrow" onClick={rightImage}></img>
                
            </div>
        </div>
        <div className="ImageModalBackground" onClick={props.overlayHandler}>
        </div>
    </>
)
} 