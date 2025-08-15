import Slideshow from "./Slideshow";
import Sidebar from "./Sidebar";
import ImageModal from "./ImageModal";
import React from "react"


// Project is the conglomerate of the image slideshow
// Necessary sidebars and necessary text and headers
export default function Project(){
    // Image elements
    const imageList = import.meta.glob("../assets/testImages1/*", {eager:true, import:"default"}); 
    const imgs = Object.entries(imageList).map((i)=><img src={i[1]}></img>) // lowkey idk how this works
    // if it works it works

    // Image indexing
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [leftImageIndex, setLeftImageIndex] = React.useState(recomputeImage(false, 0));
    const [rightImageIndex, setRightImageIndex] = React.useState(recomputeImage(true, 0));

    // overlay variables
    const [overlayShown, setOverlayShown] = React.useState(false); // used for toggling overlay


    // slideshow functions/handlers
    function recomputeImage(goingRight, currentIndex){ // Selects the correct index for the image specified
        // Created so neighbouring images and current image can use the same function
        if (goingRight){ // if true advance the slide forward (to the right)
            if (currentIndex == Object.keys(imgs).length-1) // if max then loop all the way to the left
                return 0
            else
                return (currentIndex+1) // otherwise go right
        } else {   // if false advance the slide backward (to the left)
            if (currentIndex == 0)
                return (Object.keys(imgs).length-1) // if min then loop all to the right
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

    // overlay handlers
    function overlayOn(){
        setOverlayShown(()=>true)
    }

    function overlayOff(){
        setOverlayShown(()=>false)
    }

    return(
        <section>
            <Slideshow 
            imageElements={imgs} 
            currentIndex={selectedImage} 
            leftIndex={leftImageIndex} 
            leftHandler={leftImage}
            rightIndex={rightImageIndex}
            rightHandler={rightImage}
            showOverlay = {overlayShown}
            overlayHandler = {overlayOn}
            />

            {/**Overlay needs image elements (for a lower slideshow)
             * current image indexing
             * click handlers
             */}
            {overlayShown && 
            <ImageModal imageElements={imgs} 
            currentIndex={selectedImage} 
            showOverlay={overlayShown}
            overlayHandler={overlayOff}
            />}
        </section>
    )
}