import {useState} from "react";
import "./style.css"
export default function UploadBox(){
  const [fileSelected, setFileSelected]= useState("");
  return (
    <div class="uploadContainer">
      <div>
      <label for="Seleccionar Imagenes">Seleccionar Imagenes
      </label>
      <input type="file" />
      <button > Cargar imagen </button>
      <label for="tiempo">Tiempo entre cada imagen</label>
      <input type="range" min="5" max="15" step="5"/>
      <button>Iniciar</button>
      </div>
    </div>
  );
}
