import {default as img1} from "../../assets/Projects/testImages1/2.png";
import {default as img2} from "../../assets/Projects/testImages1/Chomusuke.png";
import {default as img3} from "../../assets/Projects/testImages1/kyocat.png"
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

const name = "Sample Project 1";
const imageTitles = ["Black cat", "Black cat staring", "Orange cat"];
const imageDescs = ["A picture of a black cat with blue eyes and big ears", "A picture of a black cat with a big head staring", "A picture of a displeased orange cat"];
const links = ["https://www.youtube.com/watch?v=Nf4AKMhw2MU", "https://github.com/YDancer/portfolio"]
const linkHeader = ["Youtube Video", "Github link"]
const solo = false;       

const imageArray = [img1, img2, img3]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, linkHeader, imageArray, solo};

// Now create another js file that imports all files of this type
// call it projImport.js or index.js or whatever, 
// then you can use imageDir to import the correct image 
// After that you'll have to figure out how to export that image import