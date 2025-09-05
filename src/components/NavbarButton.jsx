import "./NavbarButton.css"

export default function NavbarButton(props){
    // Made in order to cleanup the button styles and animations
    return(
        <div className="navbarButton">{/**will be fixed width for sliding effect */}
            <div className="buttonBackground"></div> {/** Will be positioned absolutely for the sliding effect*/ }
            <a href={props.jumpTo}><img src={props.imgSrc}></img>{props.buttonText}</a>
        </div>
    )
}