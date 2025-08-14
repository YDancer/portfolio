import sampleImage from "../assets/sampleImage.png"
import leftArrow from "../assets/arrow1Left.svg"
import rightArrow from "../assets/arrow1Right.svg"
import "./Slideshow.css"


// provide list of image elements for slideshow from upper component
// ******IMPORTANT: ADD ALT TEXT TO IMAGES IN SLIDESHOW


export default function Slideshow(props){
    const images = props.imageElements
    const leftImageIndex = props.leftIndex
    const rightImageIndex = props.rightIndex
    const selectedImage = props.currentIndex
    

    return(
        <div className="slideshowContainer">
            <div className="slideshowLeftImage">
                {images[leftImageIndex]}
            </div>
            <img className="slideshowLeftArrow" src={leftArrow} alt="Left Arrow" onClick={props.leftHandler}></img>
            <div className="slideshowImageContainer">
                {images[selectedImage]}
            </div>
            <img className="slideshowRightArrow" src={rightArrow} alt="Right Arrow" onClick={props.rightHandler}></img>
            <div className="slideshowRightImage">
                {images[rightImageIndex]}
            </div>
        </div>
    )
}