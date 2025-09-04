import sampleUser from "../assets/sampleUser.png"
import './Overview.css'
import linkedInIcon from "../assets/linkedIn.svg"

// Overview section of the portfolio
// Contains "About me" information

export default function Overview(){

    return(
        <section className="overviewContainer">
            <div className="left">
                <h2 style={{fontSize: "3rem", marginBottom: "0"}} id="overview">Overview</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipiscing elit quisque faucibus ex sapien 
                    vitae pellentesque sem placerat in id cursus 
                    mi pretium tellus duis convallis tempus leo eu 
                    aenean sed diam urna tempor pulvinar vivamus 
                    fringilla lacus nec metus bibendum egestas iaculis 
                    massa nisl malesuada lacinia integer nunc posuere ut 
                    hendrerit semper vel class aptent taciti sociosqu ad 
                    litora torquent per conubia nostra inceptos 
                </p>
                
            </div>
            <div className="right">
                <h3>Keerat Singh</h3>
                <img src={sampleUser}></img>
                <div className="linkContainer">
                    <a href="https://www.linkedin.com/in/keerat-singh-8aa872271/" style={{display: "flex"}}><img src={linkedInIcon} style={{width: "50px", height: "35px"}}></img></a><a href="https://www.linkedin.com/in/keerat-singh-8aa872271/">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}