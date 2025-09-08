import "../components/Navbar.css"
import logo1 from "../assets/kslogo.svg"
import homeIcon from "../assets/icons/home.svg"
import projectIcon from "../assets/icons/project.svg"
import projectIcon2 from "../assets/icons/otherProject.svg"
import contactIcon from "../assets/icons/contact.svg"
import NavbarButton from "./NavbarButton"
import hamburgerIcon from "../assets/icons/hamburger.svg"
import React from "react"

// the navbar (used to navigate between different pages)
// We might want to opt to have a seperate quick links from the home page too
// ex: Sidebar that jumps from section to section on the home page specifically
// Currently the links only refer to pages only on the homepage
// As I don't have enough experience for individual pages

export default function Navbar(){
    const [navExpand, setNavExpand] = React.useState(false);

    function toggleNavButtons(){
        setNavExpand((prev)=>!prev)
    }

    return(
        <nav className="navbar">
            <div className="navbarLeftContainer">
                <div className="navbarImgContainer">
                    <a href="" className="navbarImg">
                        <img src={logo1} alt="clickable logo"></img>
                    </a>
                    <img src={hamburgerIcon} alt="expand navbar menu" className="hamburger" onClick={toggleNavButtons}></img>
                </div>
                <div className={navExpand ? "navbarContainer leftContainerLinks" : "navbarContainer leftContainerLinks navbarToggle"}>
                    <NavbarButton buttonText="Home" jumpTo="#overview" imgSrc={homeIcon} altText="home icon"/>
                    <NavbarButton buttonText="Projects" jumpTo="#projects" imgSrc={projectIcon} altText="project icon"/>
                    <NavbarButton buttonText="External Media" jumpTo="#extmedia" imgSrc={projectIcon2} altText="other media icon"/>
                </div>
            </div>
            <div className={navExpand ? "navbarRightContainer navbarContainer" : "navbarRightContainer navbarContainer navbarToggle"}>
                <NavbarButton buttonText="Contact" jumpTo="#contact" imgSrc={contactIcon} altText="contact me icon"/>
            </div>
            
        </nav>
    )
}