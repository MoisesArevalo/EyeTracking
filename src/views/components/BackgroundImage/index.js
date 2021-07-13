import {useState, useEffect} from "react";
import "./style.css"
 export default function BackgroundImage({image, visible}){

       const webgazer = window.webgazer;
       console.log(visible);
       if(visible){
         webgazer.setGazeListener((data, clock) => {
           console.log(data, clock);
         }).begin();
       }


     return (
       <div className={`imageBackground ${visible ? "total":""}`}>
         <img class="image" src={image}></img>
       </div>
       );
 }
