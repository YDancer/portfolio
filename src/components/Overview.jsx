import sampleUser from "../assets/overviewImg.jpg"
import './Overview.css'
import linkedInIcon from "../assets/icons/linkedIn.svg"

// Overview section of the portfolio
// Contains "About me" information

export default function Overview(){

    return(
        <section className="overviewContainer">
            <div className="left">
                <h2 style={{fontSize: "3rem", marginBottom: "0"}} id="overview">Overview</h2>
                <p>
                    I am an aspiring developer currently studying Computer Science and Mathematics at the University of Calgary. 
                    This website is a showcase of my various and ongoing achievements in the development space. 
                    Encompassing both team efforts and individual efforts, this showcase includes projects I've worked on academically,
                    professionally, as well as personally. For more information on my skills and experience, refer to my LinkedIn.
                    For other inquiries, feel free to contact me via email, or send me a message on LinkedIn. 
                </p>
                
            </div>
            <div className="right">
                <h3>Keerat Singh</h3>
                <img src={sampleUser} alt="picture of keerat singh (me)"></img>
                <div className="linkContainer">
                    <a href="https://www.linkedin.com/in/keerat-singh-8aa872271/" style={{display: "flex"}}>
                        <img src={linkedInIcon} style={{width: "50px", height: "35px"}} alt="LinkedIn icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/keerat-singh-8aa872271/">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}