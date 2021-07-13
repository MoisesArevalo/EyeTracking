import UploadBox from './components/UploadBox';
import BackgroundImage from './components/BackgroundImage';
import {useState, useEffect} from "react";
import './style.css'
export default function Upload(){
  const [isVisibleUpload, setVisibleUpload] = useState(false);
  const [fileSelected, setFileSelected] = useState([]);
  const [images, setImages] = useState("");
  const handleUploadFile = (event) =>{
      setFileSelected(event.target.files[0]);
      setImages(URL.createObjectURL(event.target.files[0]));
      console.log("longitud"+event.target.files.length.toString());
      console.log(images);

  };
  const handleTimeImage = event =>{
    console.log(event.target.valueAsNumber);
  }
  const handleStartTracker = () =>{
    setVisibleUpload(true);
  };
  useEffect(()=>{
    console.log('cambia');
  },[isVisibleUpload, fileSelected])
  return(
    <div className={`uploadBox ${isVisibleUpload ? "image":""}`} >
      <UploadBox onUpload={handleUploadFile} onStartTracker={handleStartTracker} isVisibleUpload={isVisibleUpload} onTimeImage={handleTimeImage}  />
      <BackgroundImage image={images} visible={isVisibleUpload} />
    </div>

  );
}
