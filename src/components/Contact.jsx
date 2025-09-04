import "./Contact.css"
import linkedInIcon from "../assets/linkedIn.svg"
import emailIcon from "../assets/email.svg"

export default function Contact(){
    return(
        <section className="contactContainer">
            <h2 id="contact">Contact Me</h2>
            <h3>Feel free to contact me via email or send me a message on LinkedIn:</h3>
            <div className="contactLinks">
                <div className="linkContainer">
                    <img src={emailIcon} style={{width: "60px", height: "45px"}}></img><span>Email:</span><a href="mailto:resourceful.developer@gmail.com">resourceful.developer@gmail.com</a>
                </div>
                <div className="linkContainer">
                    <img src={linkedInIcon} style={{width: "60px", height: "45px"}}></img><span>LinkedIn:</span><a href="https://www.linkedin.com/in/keerat-singh-8aa872271/">Keerat Singh</a>
                </div>
            </div>
        </section>
    )
}