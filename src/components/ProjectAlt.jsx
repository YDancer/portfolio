import Slideshow from "./Slideshow";
import BottomBar from "./BottomBar";
import ImageModal from "./ImageModal";
import React from "react"
import "./ProjectAlt.css"
import Sidebar from "./Sidebar";


// Alternate layout for the project tab
// Necessary sidebars and necessary text and headers
export default function ProjectAlt(props){
    // Image elements
    let x = 0
    const imgs = (props.imageArray.map((i)=>{
        return(<img src={i} key={x++}></img>)}))
    
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

    const [scaleFactor, setScaleFactor] = React.useState(false)

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
        document.body.style.overflow = "hidden"
    }

    function overlayOff(){
        setOverlayShown(()=>false)
        document.body.style.overflow = "unset"
    }

    // info container handlers
    function objToggle(){
        setObjExpand((prev)=>{
            if (prev){
                setScaleFactor(()=>false)
            } else {
                setScaleFactor(()=>true)
            }
            return(!prev)})
        setMoreRole(()=>false);
        setExtLinks(()=>false);
    }

    function moreRoleToggle(){
        setObjExpand(()=>false);
        setMoreRole((prev)=>{
            if (prev){
                setScaleFactor(()=>false)
            } else {
                setScaleFactor(()=>true)
            }
            return(!prev)});
        setExtLinks(()=>false);
    }

    function extLinkToggle(){
        setObjExpand(()=>false);
        setMoreRole(()=>false);
        setExtLinks((prev)=>{
            if (prev){
                setScaleFactor(()=>false)
            } else {
                setScaleFactor(()=>true)
            }
            return(!prev)});
    }


    function recomputeSidebar(){
        if (objExpand){
            return(<Sidebar sidebarTitle="Objective" sidebarContent={<p>{props.objective}</p>} clickHandler={objToggle} isAlt={true}/>)
        } else if (moreRole){
            return(<Sidebar sidebarTitle={props.solo ? "Additional Information" : "More about my role"} sidebarContent={<p>{props.moreRole}</p>} clickHandler={moreRoleToggle} isAlt={true}/>)
        } else if (extLinks){
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
            return(<Sidebar sidebarTitle="External Links" sidebarContent={linkElements} clickHandler={extLinkToggle} isAlt={true}/>)
        } else {
            return (<></>)
        }
        
    }


    return(
        <section className="projectAltContainer">
            <div className="projectAltContent">
                 {recomputeSidebar()}
                <div className="projectAltImage">
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
                        scaleFactor={scaleFactor}
                    />
                    <p>{props.imageDesc[selectedImage]}</p>
                </div>
            </div>
            
            <BottomBar 
                objHandler={objToggle} 
                roleHandler={moreRoleToggle} 
                linkHandler={extLinkToggle} 
                objExpand = {objExpand}
                moreRole = {moreRole}
                extLinks = {extLinks}
                solo = {props.solo}
            />

            {overlayShown && 
            <ImageModal imageElements={imgs} 
            currentIndex={selectedImage} //** Should only depend on it initially,  not constantly  aka if it swaps in the overlay, it shouldn't change the main*/
                                        //** Also add a way to distinguish which image you are on */
            showOverlay={overlayShown}
            overlayHandler={overlayOff}
            recomputeImage={recomputeImage}
            imageTitles={props.imageTitles}
            isAlt={true}
            />}
        </section>
    )
}