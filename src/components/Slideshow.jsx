import sampleImage from "../assets/sampleImage.png"
import "./Slideshow.css"
import React from "react"

// provide list of image elements for slideshow from upper component


export default function Slideshow(props){
    const images = props.imageElements

    const [selectedImage, setSelectedImage] = React.useState(0);
    const [leftImageIndex, setLeftImageIndex] = React.useState(recomputeImage(false, 0));
    const [rightImageIndex, setRightImageIndex] = React.useState(recomputeImage(true, 0));

    function recomputeImage(goingRight, currentIndex){ // Selects the correct index for the image specified
        // Created so neighbouring images and current image can use the same function
        if (goingRight){ // if true advance the slide forward (to the right)
            if (currentIndex == Object.keys(images).length-1) // if max then loop all the way to the left
                return 0
            else
                return (currentIndex+1) // otherwise go right
        } else {   // if false advance the slide backward (to the left)
            if (currentIndex == 0)
                return (Object.keys(images).length-1) // if min then loop all to the right
            else
                return (currentIndex-1) // Otherwise go left
        }
    }

    function leftImage(){ // When the left arrow is clicked
        setSelectedImage((prevValue)=>{
            return(recomputeImage(false, prevValue))
        })

        setLeftImageIndex((prevValue)=>{
            return(recomputeImage(false, prevValue))
        })
        
        setRightImageIndex((prevValue)=>{
            return(recomputeImage(false, prevValue))
        })
    }

    function rightImage(){ // When the right arrow is clicked
         setSelectedImage((prevValue)=>{
            return(recomputeImage(true, prevValue))
        })

        setLeftImageIndex((prevValue)=>{
            return(recomputeImage(true, prevValue))
        })
        
        setRightImageIndex((prevValue)=>{
            return(recomputeImage(true, prevValue))
        })
    }

    return(
        <div className="slideshowContainer">
            <div className="slideshowLeftImage">
                {images[leftImageIndex]}
            </div>
            <button className="leftButton" onClick={leftImage}>Left</button>
            <div className="slideshowImageContainer">
                {images[selectedImage]}
            </div>
            <button className="rightButton" onClick={rightImage}>Right</button>
            <div className="slideshowRightImage">
                {images[rightImageIndex]}
            </div>
        </div>
    )
}