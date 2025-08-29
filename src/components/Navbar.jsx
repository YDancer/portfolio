import "../components/Navbar.css"
import logo1 from "../assets/kslogo.svg"
import homeIcon from "../assets/home.svg"
import projectIcon from "../assets/project.svg"
import projectIcon2 from "../assets/otherProject.svg"
import contactIcon from "../assets/contact.svg"

// the navbar (used to navigate between different pages)
// We might want to opt to have a seperate quick links from the home page too
// ex: Sidebar that jumps from section to section on the home page specifically
// Currently the links only refer to pages only on the homepage
// As I don't have enough experience for individual pages

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbarLeftContainer">
            <a href="" className="navbarImg">
                <img src={logo1}></img>
            </a>
            
            <div className="navbarContainer leftContainerLinks">
                <a href=""><img src={homeIcon}></img>Home</a>
                <a href="Projects"><img src={projectIcon}></img>Projects</a>
                <a href="External Media"><img src={projectIcon2}></img>External Media</a>
            </div>
            </div>
            <div className="navbarRightContainer navbarContainer">
                <a href="Contact Me"><img src={contactIcon}></img>Contact Me</a>
            </div>
        </nav>
    )
}