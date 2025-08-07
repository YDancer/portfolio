import sampleImage from "../assets/sampleImage.png"
import "./Slideshow.css"
import React from "react"

// provide list of image elements for slideshow from upper component


export default function Slideshow(props){
    const images = props.imageElements
    const [selectedImage, setSelectedImage] = React.useState(0);

    function leftImage(){
        setSelectedImage((prevValue)=>{
            if (prevValue == 0)
                return(Object.keys(images).length-1)
            else
                return(prevValue-1)
        })
    }

    function rightImage(){
        setSelectedImage((prevValue)=>{
            if (prevValue == Object.keys(images).length-1)
                return(0)
            else
                return(prevValue+1)
        })
    }

    return(
        <div className="slideshowContainer">
            <button className="leftButton" onClick={leftImage}>Left</button>
            <div className="slideshowImageContainer">
                {images[selectedImage]}
            </div>
            <button className="rightButton" onClick={rightImage}>Right</button>
        </div>
    )
}