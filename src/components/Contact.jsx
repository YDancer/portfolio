import "./Contact.css"

export default function Contact(){
    return(
        <section className="contactContainer">
            <h2>Contact Me</h2>
            <h3>Feel free to contact me via email or send me a message on LinkedIn:</h3>
            <div className="contactLinks">
                <span>Email: <a>email@example.com</a> </span>
                <span>LinkedIn: <a>link.example.com</a> </span>
            </div>
        </section>
    )
}