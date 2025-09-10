import {default as img1} from "../../assets/Projects/CurveEditor/1.png";
import {default as img2} from "../../assets/Projects/CurveEditor/2.png";
import {default as img3} from "../../assets/Projects/CurveEditor/3.png";
import {default as img4} from "../../assets/Projects/CurveEditor/4.png";
import {default as img5} from "../../assets/Projects/CurveEditor/5.png";
import {default as img6} from "../../assets/Projects/CurveEditor/6.png";
import {default as img7} from "../../assets/Projects/CurveEditor/7.png";


const projObj = `
The objective of this project was to create a fully functional 3D curve editor using OpenGL. 
This editor displays two types of curves, namely Bezier and B-Spline curves. 
It also allows you to create, modify, and delete the control points of the curve. 
Because the editor is 3D, there is 3D functionality such as a camera, and two sample tensor product surfaces that are viewable. 
Finally, using the drawn curve in the editor, a surface of revolution can be constructed and viewed in 3D.
`;

const moreRole = `
This was an introduction to the viewing pipeline in computer graphics,
 and that was put into practice by implementing the perspective camera in the editor. 
 Parameterizing curves and surfaces was another thing I learned in the development of this application. 
 The Bezier curves were implemented by sampling points along the defined curve in short steps, 
 and the B-Spline curves were implemented by Chaikin’s Subdivision Algorithm.
`;

const name = "Curve Editor";
const imageTitles = ["Bezier Curve", "B-Spline Curve", "Modified Bezier Curve", "Modified B-Spline Curve", "Surface of Revolution", "Surface 1", "Surface 2"];
const imageDescs = ["Bezier curve in the editor form.",
    "B spline curve in the editor form.", 
    "Modified original bezier curve in editor form.",
    "Added control point to B-Spline and viewed in 3D curve viewer.", 
    "Surface of revolution created from the previous B-Spline Curve.",
    "Sample of a tensor product surface, viewed in 3D.",
    "Sample of a different tensor product surface, viewed in 3D."];

const links = ["https://youtu.be/BoGjy2TQCsA"];       
const linkHeader = ["Youtube Demo"];
const solo = true;

const imageArray = [img1, img2, img3, img4, img5, img6, img7]

export default {projObj, moreRole, name, imageTitles, imageDescs, links, linkHeader, imageArray, solo};

