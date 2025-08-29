import "../components/Navbar.css"
import logo1 from "../assets/kslogo.svg"

// the navbar (used to navigate between different pages)
// We might want to opt to have a seperate quick links from the home page too
// ex: Sidebar that jumps from section to section on the home page specifically



export default function Navbar(){
    

    return(
        <nav className="navbar">
            
            <a href="" className="navbarImg">
                <img src={logo1}></img>
            </a>
            
            <div className="navbarLeftContainer navbarContainer">
                <a href="">Home</a>
                <a href="Projects">Projects</a>
                <a href="External Media">External Media</a>
                
            </div>
            <div className="navbarRightContainer navbarContainer">
                <a href="Contact Me">Contact Me</a>
            </div>
        </nav>
    )
}