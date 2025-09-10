import {default as img1} from "../../assets/Projects/localmarketplace/1 customer welcome.png";
import {default as img2} from "../../assets/Projects/localmarketplace/2 customer session.png";
import {default as img3} from "../../assets/Projects/localmarketplace/3 payment start.png";
import {default as img4} from "../../assets/Projects/localmarketplace/4 card payment.png";
import {default as img5} from "../../assets/Projects/localmarketplace/5 cash payment.png";
import {default as img6} from "../../assets/Projects/localmarketplace/6 customer done.png";
import {default as img7} from "../../assets/Projects/localmarketplace/7 attendant station.png";


const projObj = `
Our team was tasked with creating a mock self checkout system in software. 
This project as a whole was designed to teach about core software engineering principles.
In the first stage, we were given a large amount of Java classes and interfaces, and our team had to
decide which class abstractions were necessary. In the second stage, the software testing phase, our 
team had to first implement the features of the checkout system, and then write test cases for our features. 
Finally, the last stage consisted of adding a GUI to our implementation as well as creating a demo. 
`;

const moreRole = `
In the first stage, our group was tasked with creating the UML diagram for the classes our team chose to keep. 
This includes all relationships and types of classes we chose to keep. In the second phase, I was implementing 
the checkout system session block/unblock feature and the card payment feature. For the testing part of this 
phase, I wrote test cases for the receipt printer feature. In the last stage I was on the team responsible 
for designing the GUI, writing documentation, and editing the demo video. 
`;

const name = "Local Marketplace Self Checkout System";
const imageTitles = ["Customer Welcome Screen", "Customer Active Session", "Start Payment", "Card Payment", "Cash Payment", "Finished Session", "Attendant Session"];
const imageDescs = ["When a customer first approaches the self checkout system",
    "Display of an active customer session", 
    "When a customer is done scanning items and is ready to pay",
    "Customer screen when processing a card payment", 
    "Customer screen when processing a cash payment",
    "When customer successfully pays and finishes their session",
    "Display of the self checkout system attendant"];
const links = null;       
const linkHeader = null;
const solo = false;

const imageArray = [img1, img2, img3, img4, img5, img6, img7]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, linkHeader, imageArray, solo};
