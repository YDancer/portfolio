import Slideshow from "./Slideshow";
import Sidebar from "./Sidebar";
import ImageModal from "./ImageModal";
import React from "react"
import "./ProjectAlt.css"
import sidebarLeftArrow from "../assets/sidebarArrowLeft.svg"


// Alternate layout for the project tab
// Necessary sidebars and necessary text and headers
export default function ProjectAlt(props){
    // Image elements
    const imgs = (props.imageArray.map((i)=><img src={i}></img>))
    
    // Image indexing
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [leftImageIndex, setLeftImageIndex] = React.useState(recomputeImage(false, 0));
    const [rightImageIndex, setRightImageIndex] = React.useState(recomputeImage(true, 0));

    // overlay variables
    const [overlayShown, setOverlayShown] = React.useState(false); // used for toggling the big overlay

    // info container variables
    const [objExpand, setObjExpand] = React.useState(false); // Used for toggling objective container
    const [moreRole, setMoreRole] = React.useState(false); // Used for toggling one sidebar
    const [extLinks, setExtLinks] = React.useState(false); // Used for toggling links


    // NOTE:
    // consider moving these functions into seperate js files for more readability



    

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

    // info container handlers
    function objToggle(){
        setObjExpand((prev)=>(!prev))
        setMoreRole(()=>false);
        setExtLinks(()=>false);
    }

    function moreRoleToggle(){
        setObjExpand(()=>false);
        setMoreRole((prev)=>(!prev));
        setExtLinks(()=>false);
    }

    function extLinkToggle(){
        setObjExpand(()=>false);
        setMoreRole(()=>false);
        setExtLinks((prev)=>(!prev));
    }

    // As of right now, i'm not sure how to get dimension of a component
    // As a compromise the following variable using manual calculations

    const containerHeight = ""
    // height of the following needs to be calculated
    /**
     * h2 ()
     * h3
     * Slideshow (400px)
     * p
     * <bottomContainer>
     */

    return(
        <section className="projectAltContainer">
            <div className="projectAltLeft">
                <h2>{props.name}</h2>
                <h3>{props.imageTitles[selectedImage]}</h3>
                <Slideshow 
                    imageElements={imgs} 
                    currentIndex={selectedImage} 
                    leftIndex={leftImageIndex} 
                    leftHandler={leftImage}
                    rightIndex={rightImageIndex}
                    rightHandler={rightImage}
                    showOverlay = {overlayShown}
                    overlayHandler = {overlayOn}
                    isAlt = {true}
                    imgArray = {props.imageArray} 
                />
            {/**
             * Note the values need to populated with the respective data from files
             * And they need to swap with respective variables
             */}
                <p>{props.imageDesc[selectedImage]}</p>
            </div>
            {overlayShown && 
            <ImageModal imageElements={imgs} 
            currentIndex={selectedImage} //** Should only depend on it initially,  not constantly  aka if it swaps in the overlay, it shouldn't change the main*/
                                        //** Also add a way to distinguish which image you are on */
            showOverlay={overlayShown}
            overlayHandler={overlayOff}
            recomputeImage={recomputeImage}
            imageTitles={props.imageTitles}
            />}
        </section>
    )
}