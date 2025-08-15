import "./ImageModal.css"

export default function ImageModal(props){
    
    
    return(
    <div className="ImageModalOverlay" onClick={props.overlayHandler}>
        {props.imageElements[props.currentIndex]}
    </div>
)
} 