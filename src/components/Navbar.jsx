import "../components/Navbar.css"

// the navbar (used to navigate between different pages)
// We might want to opt to have a seperate quick links from the home page too
// ex: Sidebar that jumps from section to section on the home page specifically

export default function Navbar(){
    

    return(
        <nav className="navbar">
            <ul className="navbarList">
                <li><a href="">Home</a></li> {/** Replace with an image probably */}
                <li><a href="Projects">Projects</a></li>
                <li><a href="External Media">External Media</a></li>
                <li><a href="Contact Me">Contact Me</a></li>
            </ul>
        </nav>
    )
}