import Slideshow from "./Slideshow";
import Sidebar from "./Sidebar";
import ImageModal from "./ImageModal";
import React from "react"
import "./Project.css"
import sidebarLeftArrow from "../assets/buttons/sidebarArrowLeft.svg"


// Project is the conglomerate of the image slideshow
// Necessary sidebars and necessary text and headers
export default function Project(props){
    // Image elements
    const imgs = (props.imageArray.map((i)=><img src={i}></img>))

    // Image indexing
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [leftImageIndex, setLeftImageIndex] = React.useState(recomputeImage(false, 0));
    const [rightImageIndex, setRightImageIndex] = React.useState(recomputeImage(true, 0));

    // overlay variables
    const [overlayShown, setOverlayShown] = React.useState(false); // used for toggling the big overlay

    // sidebar variables
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

    // sidebar handlers
    function moreRoleToggle(){
        setMoreRole((prev)=>(!prev));
    }

    function extLinkToggle(){
        setExtLinks((prev)=>(!prev));
    }

    // used for replacing the right container in the project tab
    function rightContainer(){
        if (!moreRole && !extLinks){
            return(
                <div className="projectRight">
                    <div className="sidebarArrows arrowButton" onClick={moreRoleToggle}>
                        <img src={sidebarLeftArrow} alt="Expand the more on my role sidebar"></img>
                        <span>My role</span>
                    </div>
                    <div className="sidebarArrows arrowButton" onClick={extLinkToggle}>
                        <img src={sidebarLeftArrow} alt="Expand the external links sidebar"></img>
                        <span>External links</span>
                    </div>
                </div>
            )
        } else if(moreRole){
            return(
                    <div className="projectRight">
                        <Sidebar sidebarTitle="More about my role" 
                        sidebarContent={<p>{props.moreRole}</p>} 
                        clickHandler={moreRoleToggle} 
                        isAlt={false}/>
                    </div>
            )

        } else {
            let x = -1;
            const linkElements = props.linkHeader.map((header1)=>{
                x++;
                return(
                    <div key={x+1} className="linkContent">
                        <h4>{header1}:</h4>
                        <a href={props.links[x]}>{props.links[x]}</a>
                    </div>
                )
            })
            return(
                <div className="projectRight">
                    <Sidebar 
                    sidebarTitle="External links" 
                    sidebarContent={linkElements} 
                    clickHandler={extLinkToggle} 
                    isAlt={false}/>
                </div>
            )
        }
    }

    return(
        <section className="projectContainer">
            <div className="projectLeft">
                <h2>{props.name}</h2>
                <Slideshow 
                    imageElements={imgs} 
                    currentIndex={selectedImage} 
                    leftIndex={leftImageIndex} 
                    leftHandler={leftImage}
                    rightIndex={rightImageIndex}
                    rightHandler={rightImage}
                    showOverlay = {overlayShown}
                    overlayHandler = {overlayOn}
                    isAlt = {false}
                    scaleFactor = {1}
                />
            {/**
             * Note the values need to populated with the respective data from files
             * And they need to swap with respective variables
             */}
                <h3>{props.imageTitles[selectedImage]}</h3>
                <p>{props.imageDesc[selectedImage]}</p>
            </div>
            <div className="projectCenter">
                <h2>Objective</h2>
                <p>{props.objective}</p>
            </div>
            {rightContainer()}
            {overlayShown && 
            <ImageModal imageElements={imgs} 
            currentIndex={selectedImage} //** Should only depend on it initially,  not constantly  aka if it swaps in the overlay, it shouldn't change the main*/
                                        //** Also add a way to distinguish which image you are on */
            showOverlay={overlayShown}
            overlayHandler={overlayOff}
            recomputeImage={recomputeImage}
            imageTitles={props.imageTitles}
            isAlt = {false}
            />}
        </section>
    )
}