import Slideshow from "./Slideshow";
import Sidebar from "./Sidebar";
import "./Project.css"
// Project is the conglomerate of the image slideshow
// Necessary sidebars and necessary text and headers
export default function Project(){
    const imageList = import.meta.glob("../assets/testImages1/*", {eager:true, import:"default"}); 
    const imgs = Object.entries(imageList).map((i)=><img src={i[1]}></img>) // lowkey idk how this works
    // if it works it works

    return(
        <section className="projectContainer">
            <div className="projectLeft">
                <h2>Project Name</h2>
                <Slideshow imageElements={imgs}></Slideshow>
                <h3>Image Name</h3>
                <p>Image description goes here and tends to be a little longer</p>
            </div>
            <div className="projectCenter">
                <h2>Objective</h2>
                <p>Text for objective tends to be a whole paragraph of text. A lot longer then the description
                    Text for objective tends to be a whole paragraph of text. A lot longer then the description
                    Text for objective tends to be a whole paragraph of text. A lot longer then the description
                    Text for objective tends to be a whole paragraph of text. A lot longer then the description
                </p>
            </div>
            <div className="projectRight">
                <button>More on my role</button>
                <button>External Links</button>
            </div>
        </section>
    )
}