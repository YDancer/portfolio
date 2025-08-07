import Slideshow from "./Slideshow";
import Sidebar from "./Sidebar";
// Project is the conglomerate of the image slideshow
// Necessary sidebars and necessary text and headers
export default function Project(){
    const imageList = import.meta.glob("../assets/testImages1/*", {eager:true, import:"default"}); 
    const imgs = Object.entries(imageList).map((i)=><img src={i[1]}></img>) // lowkey idk how this works
    // if it works it works

    return(
        <section>
            <Slideshow imageElements={imgs}></Slideshow>
        </section>
    )
}