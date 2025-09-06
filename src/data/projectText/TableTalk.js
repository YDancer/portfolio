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
Our team was tasked with designing, prototyping and creating a board-game focused social network app. Our project was split into two parts over the entire course, proposal part and the prototype part. In the proposal part: we conducted research, interviewed potential users, and created paper-prototypes after research analysis. From there, we created a set of paper-prototyped requirements and presented our proposals for feedback. After incorporating the feedback, we made horizontal prototypes of our requirements. Finally, after a usability and heuristic evaluation of our prototypes, our final implementation was developed. Shown here is the final implementation.

`;

const moreRole = `
In the first phase, I conducted interviews with users of different backgrounds, 
namely avid board game enthusiasts and casual players. In the paper-prototyping phase, 
I was responsible for paper-prototyping the blog page and the game scheduling page. 
The game scheduling feature was later deemed out of scope for our requirements. 
In the final implementation stage, I was tasked with creating the blog page. 

`;

const name = "Sample Project 3";
const imageTitles = ["Black cat", "Black cat staring", "Orange cat"];
const imageDescs = ["A picture of a black cat with blue eyes and big ears", "A picture of a black cat with a big head staring", "A picture of a displeased orange cat"];
const links = null;       
const linkHeader = null;

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, linkHeader, imageArray};

// Now create another js file that imports all files of this type
// call it projImport.js or index.js or whatever, 
// then you can use imageDir to import the correct image 
// After that you'll have to figure out how to export that image import