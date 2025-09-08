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

    function leftArrowClassname(){
        if (props.isAlt){
            if (props.scaleFactor){
                return("altArrowStyles arrowButton slideshowLeftArrow")
            } else {
                return ("arrowStyles arrowButton slideshowLeftArrow")
            }
        } else {
            return("arrowButton slideshowLeftArrow")
        }
    }

    function rightArrowClassname(){
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
    
    // Bug above (left arrow and right arrow should have different)

    return(
        <div className="slideshowContainer">
            <div className={adjacentContainerClassname()}>
                {images[leftImageIndex]}
            </div>
            <img className={leftArrowClassname()} src={leftArrow} alt="Left Arrow" onClick={props.leftHandler}></img>
            <div className={imageContainerClassname()} onClick={props.overlayHandler}>
                {images[selectedImage]}
            </div>
            <img className={rightArrowClassname()} src={rightArrow} alt="Right Arrow" onClick={props.rightHandler}></img>
            <div className={adjacentContainerClassname()}>
                {images[rightImageIndex]}
            </div>
        </div>
    )
}