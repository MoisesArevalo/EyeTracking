import UploadBox from './components/UploadBox';
import BackgroundImage from './components/BackgroundImage';
import DownloadFile from './components/DownloadFile';
import {useState, useEffect} from "react";
import './style.css'
export default function Upload(){
  const [isVisibleUpload, setVisibleUpload] = useState(false);
  const [isDownload, setDownload] = useState(true);
  const [fileSelected, setFileSelected] = useState(0);
  const [image, setImages] = useState("");
  const [time, setTime] = useState(15);
  const [imageList, setImageList] = useState(0);
  const [position, setPosition] =  useState(0);
  const [data, setData]= useState([]);
  const handleUploadFile = (event) =>{
      setFileSelected(event.target.files);
      // setImages(URL.createObjectURL(event.target.files[0]));
      let imagesList =[];
      for(let i=0;i<event.target.files.length;i++){
        imagesList.push(URL.createObjectURL(event.target.files[i]));

      }
      setImageList(imagesList);
      setPosition(0);
  };
  const handleTimeImage = event =>{

    setTime(event.target.valueAsNumber);
  }
  const webgazer = window.webgazer;
  const wg = webgazer.setGazeListener((data, clock) => {
    if(data){
      dataTest.push([data.x, data.y, clock,position ]);
      console.log(data, clock);
    }
    //return(data.x);
  });
  var dataTest =[]

  const handleStartTracker = () =>{
    setVisibleUpload(true);
    setDownload(false);
    setImages(imageList[position]);

    if(!isVisibleUpload){

      wg.begin();
    }
  };
  const handleNextImage = ()=>{

    if(position<imageList.length-1){
      setImages(imageList[position+1]);
    }
    else{
      try{
        webgazer.pause();
      } catch(error){

      }
      setVisibleUpload(false);
      setDownload(true);
      console.log("------> "+dataTest.length);

    }
    setPosition(position+1);
  }
  const handleAdd= (data, clock)=>{
    setData(data.push([data.x, data.y, clock,position ]));
  }
  return(
    <div className={`uploadBox ${isVisibleUpload ? "image":""}`} >

      <UploadBox onUpload={handleUploadFile} onStartTracker={handleStartTracker} isVisibleUpload={isVisibleUpload} onTimeImage={handleTimeImage} time={time} />
      {isDownload ? <DownloadFile list={dataTest} isVisible={isDownload}/> : ""}

      <BackgroundImage image={image} visible={isVisibleUpload} onNextImage={handleNextImage} onAdd={handleAdd}/>

    </div>

  );
}
