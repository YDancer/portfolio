import "./Contact.css"
import linkedInIcon from "../assets/icons/linkedIn.svg"
import emailIcon from "../assets/icons/email.svg"
import gitIcon from "../assets/icons/gitIcon.svg"

export default function Contact(){
    return(
        <section className="contactContainer">
            <h2 id="contact">Contact Me</h2>
            <h3>Feel free to contact me via email or send me a message on LinkedIn:</h3>
            <div className="contactLinks">
                <div className="linkContainer">
                    <img src={emailIcon} style={{width: "60px", height: "45px"}} alt="email icon"></img><span>Email:</span><a href="mailto:resourceful.developer@gmail.com">resourceful.developer@gmail.com</a>
                </div>
                <div className="linkContainer">
                    <img src={linkedInIcon} style={{width: "60px", height: "45px"}} alt="linkedin icon"></img><span>LinkedIn:</span><a href="https://www.linkedin.com/in/keerat-singh-8aa872271/">Keerat Singh</a>
                </div>
                <div className="linkContainer">
                    <img src={gitIcon} style={{width: "60px", height: "45px"}} alt="github icon"></img><span>GitHub: </span><a href="https://github.com/YDancer">GitHub</a>
                </div>
            </div>
        </section>
    )
}