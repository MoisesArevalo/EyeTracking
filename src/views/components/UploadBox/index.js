import {useState} from "react";
import "./style.css"
export default function UploadBox({onUpload, onStartTracker, isVisibleUpload, onTimeImage, time}){
  const [fileSelected, setFileSelected]= useState("");

  return (
    <div className={`uploadContainer ${isVisibleUpload ? "uploadBox--disable" : "uploadBox--enable"}`}>
      <label for="Seleccionar Imagenes">Seleccionar Imagenes
      </label>
      <div className="uploadFile">

        <input type="file" onChange={onUpload} multiple/>

      </div>

      <button onClick={onStartTracker}>Iniciar</button>

    </div>
  );
}
// <label for="tiempo">Tiempo entre cada imagen</label>
// <input className="rangeSecond" type="range" min="5" max="15" step="5" onChange={onTimeImage}/>
// <div className="tagTime">
//   <label for="second">{time} segundos. </label>
// </div>
