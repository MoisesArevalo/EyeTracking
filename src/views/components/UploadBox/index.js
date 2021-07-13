import {useState} from "react";
import "./style.css"
export default function UploadBox({onUpload, onStartTracker, isVisibleUpload, onTimeImage}){
  const [fileSelected, setFileSelected]= useState("");

  return (
    <div className={`uploadContainer ${isVisibleUpload ? "uploadBox--disable" : "uploadBox--enable"}`}>
      <label for="Seleccionar Imagenes">Seleccionar Imagenes
      </label>
      <div className="uploadFile">

        <input type="file" onChange={onUpload} multiple/>
        <button > Cargar imagen </button>
      </div>
      <label for="tiempo">Tiempo entre cada imagen</label>
      <input type="range" min="5" max="15" step="5" onChange={onTimeImage}/>
      <button onClick={onStartTracker}>Iniciar</button>

    </div>
  );
}
