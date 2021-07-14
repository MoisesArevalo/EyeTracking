import {useState, useEffect} from "react";
import "./style.css";

export default function BackgroundImage({image, visible, onNextImage, onAdd}){


     return (


        <div className={`imageBackground ${visible ? "total":""}`}>
          <img className="image" src={image}></img>
          <button className={`nextButtom ${!visible ? "disable":""}`} onClick={onNextImage}>Siguiente Imagen</button>
        </div>


       );
 }
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
