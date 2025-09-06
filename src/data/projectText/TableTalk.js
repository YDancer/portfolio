import {default as img1} from "C:/Users/ricoc/Downloads/TableTalk/1.png";
import {default as img2} from "C:/Users/ricoc/Downloads/TableTalk/2.png";
import {default as img3} from "C:/Users/ricoc/Downloads/TableTalk/3.png";
import {default as img4} from "C:/Users/ricoc/Downloads/TableTalk/4.png";
import {default as img5} from "C:/Users/ricoc/Downloads/TableTalk/5.png";
import {default as img6} from "C:/Users/ricoc/Downloads/TableTalk/6.png";
import {default as img7} from "C:/Users/ricoc/Downloads/TableTalk/7.png";
import {default as img8} from "C:/Users/ricoc/Downloads/TableTalk/8.png";
import {default as img9} from "C:/Users/ricoc/Downloads/TableTalk/9.png";
import {default as img10} from "C:/Users/ricoc/Downloads/TableTalk/10.png";
import {default as img11} from "C:/Users/ricoc/Downloads/TableTalk/11.png";


const projObj = `
This is a whole load of text and i figured this would be an easier way to store
when i'm finished typing everything, i'll export this variable. 
Now this is the objective of whatever i was making. So in essence what were we/I trying to acheive
Or in essence what is the project about

Generally there should be even more text for this objective, enough but this is just an example after all
`;

const moreRole = `
Hey guess what, this is another large area of text, dedicated to a sidebar. 
This section is dedicated to things that I did specifically among the project
now i'm keeping this one shorter for 

the placeholder text anyways. I think it'll be fine
`;

const name = "Sample Project 3";
const imageTitles = ["Black cat", "Black cat staring", "Orange cat"];
const imageDescs = ["A picture of a black cat with blue eyes and big ears", "A picture of a black cat with a big head staring", "A picture of a displeased orange cat"];
const links = null;       

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, imageArray};

// Now create another js file that imports all files of this type
// call it projImport.js or index.js or whatever, 
// then you can use imageDir to import the correct image 
// After that you'll have to figure out how to export that image import