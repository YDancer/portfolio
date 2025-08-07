import sampleUser from "../assets/sampleUser.png"
import './Overview.css'

// Overview section of the portfolio
// Contains "About me" information

export default function Overview(){

    return(
        <section className="overviewContainer">
            <div className="left">
                <h2>Overview</h2>
                <h3>Keerat Singh</h3>
            </div>
            <div className="right">
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
                <img src={sampleUser}></img>
                <a href="?">LinkedIn</a>
            </div>
        </section>
    )
}