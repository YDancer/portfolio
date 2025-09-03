import sampleImage from "../assets/sampleImage.png"
import leftArrow from "../assets/arrow1Left.svg"
import rightArrow from "../assets/arrow1Right.svg"
import "./Slideshow.css"


// provide list of image elements for slideshow from upper component
// ******IMPORTANT: ADD ALT TEXT TO IMAGES IN SLIDESHOW

// Add inline styling so it can be dynamic

export default function Slideshow(props){
    
    const leftImageIndex = props.leftIndex
    const rightImageIndex = props.rightIndex
    const selectedImage = props.currentIndex
    
    const imageHeight = props.isAlt ? 200*props.scaleFactor : 200
    // Will be used in the following classes: Also assuming these are all px measurements
    /**
     * slideshowImageContainer
     * slideshowImageContainer > img
     * slideshowLeftImage
     * slideshowLeftImage > img
     * slideshowRightImage 
     * slideshowRightImage > img
     * 
     * This is done in order to have a "dynamic" sizing
     */
    const imageWidth = props.isAlt ? 200*props.scaleFactor : 200 
    // Used in slideshowImageContainer

    const containerWidth = props.isAlt ? 100*props.scaleFactor : 100
    // Used in leftImage and rightImage    

    const arrowWidthHeight = props.isAlt ? 50*props.scaleFactor : 50


    // Inline styles for the dimension
    const imageContainerStyles = {
        height: imageHeight.toString().concat("px"),
        width: imageWidth.toString().concat("px")
    }

    const imageStyles = {
        height: imageHeight.toString().concat("px")
    }

    const adjacentContainerStyles = {
        height: imageHeight.toString().concat("px"),
        width: containerWidth.toString().concat("px")
    }

    const arrowStyles = {
        width: arrowWidthHeight.toString().concat("px"),
        height: arrowWidthHeight.toString().concat("px")
    }

    // Have to recompute images in order to add inline styles
    function setupImages(){
        if (props.isAlt){
            let x = 0;
            const images = ((props.imgArray.map((i)=>{
                x++
                return <img src={i} style={imageStyles} key={x}></img>
            })))
            return(images)
    } else {
        const images = props.imageElements
        return(images)
    }
    }

    const images = setupImages()

    return(
        <div className="slideshowContainer" style={props.isAlt ? {minHeight:"400px"}: {minHeight: "none"}}>
            <div className="slideshowLeftImage" style={adjacentContainerStyles}>
                {images[leftImageIndex]}
            </div>
            <img className="slideshowLeftArrow arrowButton" src={leftArrow} alt="Left Arrow" onClick={props.leftHandler} style={arrowStyles}></img>
            <div className="slideshowImageContainer" onClick={props.overlayHandler} style={imageContainerStyles}>
                {images[selectedImage]}
            </div>
            <img className="slideshowRightArrow arrowButton" src={rightArrow} alt="Right Arrow" onClick={props.rightHandler} style={arrowStyles}></img>
            <div className="slideshowRightImage" style={adjacentContainerStyles}>
                {images[rightImageIndex]}
            </div>
        </div>
    )
}