import leftArrow from "../assets/buttons/arrow1Left.svg"
import rightArrow from "../assets/buttons/arrow1Right.svg"
import "./Slideshow.css"


// provide list of image elements for slideshow from upper component
// ******IMPORTANT: ADD ALT TEXT TO IMAGES IN SLIDESHOW

// Add inline styling so it can be dynamic

export default function Slideshow(props){
    
    const leftImageIndex = props.leftIndex
    const rightImageIndex = props.rightIndex
    const selectedImage = props.currentIndex


    // Have to recompute images in order to add classnames
    function setupImages(){
        if (props.isAlt){
            let x = 0;
            const images = ((props.imgArray.map((i)=>{
                x++
                return <img src={i} key={x}></img>
            })))
            return(images)
    } else {
        const images = props.imageElements
        return(images)
    }
    }

    const images = setupImages()

    function imageContainerClassname(){
         if (props.isAlt){
            if (props.scaleFactor){
                return("altImageSlideshowHeight altImageContainerStyles imageContainerStyles")
            } else {
                return ("imageSlideshowHeight imageContainerStyles")
            }
        } else {
            return("slideshowImageContainer")
        }
    }

    function adjacentContainerClassname(){
        if (props.isAlt){
            if (props.scaleFactor){
                return("altImageSlideshowHeight altAdjacentContainerStyles")
            } else {
                return ("imageSlideshowHeight adjacentContainerStyles")
            }
        } else {
            return("slideshowLeftImage")
        }
    }

    function arrowClassname(){
        if (props.isAlt){
            if (props.scaleFactor){
                return("altArrowStyles arrowButton slideshowRightArrow")
            } else {
                return ("arrowStyles arrowButton slideshowRightArrow")
            }
        } else {
            return("arrowButton slideshowRightArrow")
        }
    }
    

    return(
        <div className="slideshowContainer" style={props.isAlt ? {minHeight:"400px"}: {minHeight: "none"}}>
            <div className={adjacentContainerClassname()}>
                {images[leftImageIndex]}
            </div>
            <img className={arrowClassname()} src={leftArrow} alt="Left Arrow" onClick={props.leftHandler}></img>
            <div className={imageContainerClassname()} onClick={props.overlayHandler}>
                {images[selectedImage]}
            </div>
            <img className={arrowClassname()} src={rightArrow} alt="Right Arrow" onClick={props.rightHandler}></img>
            <div className={adjacentContainerClassname()}>
                {images[rightImageIndex]}
            </div>
        </div>
    )
}