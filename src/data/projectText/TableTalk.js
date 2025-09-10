import {default as img1} from "../../assets/Projects/TableTalk/1.png";
import {default as img2} from "../../assets/Projects/TableTalk/2.png";
import {default as img3} from "../../assets/Projects/TableTalk/3.png";
import {default as img4} from "../../assets/Projects/TableTalk/4.png";
import {default as img5} from "../../assets/Projects/TableTalk/5.png";
import {default as img6} from "../../assets/Projects/TableTalk/6.png";
import {default as img7} from "../../assets/Projects/TableTalk/7.png";
import {default as img8} from "../../assets/Projects/TableTalk/8.png";
import {default as img9} from "../../assets/Projects/TableTalk/9.png";
import {default as img10} from "../../assets/Projects/TableTalk/10.png";
import {default as img11} from "../../assets/Projects/TableTalk/11.png";


const projObj = `
Our team was tasked with designing, prototyping and creating a board-game focused social network app. 
Our project was split into two parts over the entire course, proposal part and the prototype part. 
In the proposal part: we conducted research, interviewed potential users, and created paper-prototypes after research analysis.
From there, we created a set of paper-prototyped requirements and presented our proposals for feedback. After incorporating the feedback, 
we made horizontal prototypes of our requirements. Finally, after a usability and heuristic evaluation of
our prototypes, our final implementation was developed. Shown here is the final implementation.
`;

const moreRole = `
In the first phase, I conducted interviews with users of different backgrounds, 
namely avid board game enthusiasts and casual players. In the paper-prototyping phase, 
I was responsible for paper-prototyping the blog page and the game scheduling page. 
The game scheduling feature was later deemed out of scope for our requirements. 
In the final implementation stage, I was tasked with creating the blog page. 

`;

const name = "TableTalk Solutions";
const imageTitles = ["Home page", "Game Search and Leaderboard", "Game Description", "Blog Post Page", "Blog Post Example", "Matchmaking Page", "Friends Page", "Game Suggest", "Profile", "Notification example", "Personal Board Game Collection"];
const imageDescs = ["What returning users will see, all key features are accessible from this page.",
    "To search for existing games or find the popularity of all games.", 
    "When a game on the leaderboard is clicked, it will show an extensive description of the clicked game.",
    "User created discussion boards with search and sort options.", 
    "An example of a blog post. Contains a like button and a reply feature.",
    "To find new players to play with. Swipeable interface.",
    "Complete friends system with a messaging feature.", 
    "To find a new game to play.",
    "Customizable profile settings.", 
    "An example of a notification sent by a friend.",
    "Collection of all board games input by the user. Used for matchmaking and game suggest."];
const links = ["https://aemyst.github.io/TableTalk/#/", "https://github.com/aeMyst/TableTalk"];       
const linkHeader = ["TableTalk Website", "Github Repository"];
const solo = false;

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, linkHeader, imageArray, solo};

