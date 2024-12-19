//Styles
import "./styles/main.scss";
import "bootstrap";

// JavaScript
import defaultFunction from "./scripts/default";
import navbar from "./scripts/navbar";

// Check if the current page is "stagedetail.html"
if (window.location.pathname.includes("stagedetail.html")) {
    import("./scripts/slider").then((module) => {
        const slider = module.default;
        slider();
    });
}

//Images
import students from "./assets/images/studenten.png";

import werkgever from "./assets/images/werkgever.jpg";
import toekomstigestudent from "./assets/images/toekomstigestudent.jpg";
import student from "./assets/images/student.jpg";

import slide1Big from "./assets/images/slide1Big.jpg";
import slide1Small from "./assets/images/slide1Small.jpg";
import slide2Big from "./assets/images/slide2Big.jpeg";
import slide2Small from "./assets/images/slide2Small.jpg";
import slide3Big from "./assets/images/slide3Big.jpg";
import slide3Small from "./assets/images/slide3Small.jpg";
import slide4Big from "./assets/images/slide4Big.jpg";
import slide4Small from "./assets/images/slide4Small.png";
import slide5Big from "./assets/images/slide5Big.jpg";
import slide5Small from "./assets/images/slide5Small.jpg";
import slide6Big from "./assets/images/slide6Big.jpg";
import slide6Small from "./assets/images/slide6Small.jpg";

import woordlogo from "./assets/images/woordlogo-aventus.svg";

defaultFunction();
navbar();


