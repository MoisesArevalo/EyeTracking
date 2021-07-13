import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState,Component} from 'react';
import {axios} from 'axios';
import Upload from './views'
const App = () =>{
  return(
    <Upload />
  );
}

// class App extends Component {
//   state = {
//     selectFile: nulluseEffect(() => {
//     const webgazer = window.webgazer;
//     webgazer.setGazeListener((data, clock) => {
//       console.log(data, clock);
//     }).begin();
//
//   }, [imageEnable]);
//   return (
//       <div>
//           <h1>
//             EyeTracking
//           </h1>
//           <h3>
//             Cargar la imagen para analizar
//           </h3>
//           <div>
//               <input type="file" onChange={onFileChange} />
//               <button onClick={onFileUpload}>
//                 Cargar
//               </button>
//           </div>
//         {this.fileData()}
//       </div>
//     );
//   };
//
//   onFileSelected = event => {
//     this.setState({
//       selectFile: event.target.files
//     });
//   };
//   onFileUpdate = event => {
//     const formData = new FormData();
//
//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );
//
//     // Details of the uploaded file
//     console.log(this.state.selectedFile);
//     return(<div>
//       <p> Hola </p>
//     </div>);
//   }
//   // setBackgroud = event =>{
//   //   return(<div>
//   //
//   //   </>);
//   // }
//   fileData = () => {
//     if (this.state.selectedFile) {
//
//       return ( <
//         div >
//         <
//         h2 > File Details: < /h2>
//
//         <
//         p > File Name: {
//           this.state.selectedFile.name
//         } < /p>
//
//
//         <
//         p > File Type: {
//           this.state.selectedFile.type
//         } < /p>
//
//
//         <
//         p >
//         Last Modified: {
//           " "
//         } {
//           this.state.selectedFile.lastModifiedDate.toDateString()
//         } <
//         /p>
//
//         <
//         /div>
//       );
//     } else {
//       return ( <
//         div >
//         <
//         br / >
//         <
//         h4 > Choose before Pressing the Upload button < /h4> <
//         /div>
//       );
//     }
//   };
//   render(){
//     return (
//         <div>
//             <h1>
//               EyeTracking
//             </h1>
//             <h3>
//               Cargar la imagen para analizar
//             </h3>
//             <div>
//                 <input type="file" onChange={this.onFileChange} />
//                 <button onClick={this.onFileUpload}>
//                   Cargar
//                 </button>
//             </div>
//           {this.fileData()}
//         </div>
//       );
//   }
//
// }

// function App() {
//
//   useEffect(() => {
//     const webgazer = window.webgazer;
//     webgazer.setGazeListener((data, clock) => {
//       console.log(data, clock);
//     }).begin();
//
//   }, [imageEnable]);
//   return (
//       <div>
//           <h1>
//             EyeTracking
//           </h1>
//           <h3>
//             Cargar la imagen para analizar
//           </h3>
//           <div>
//               <input type="file" onChange={onFileChange} />
//               <button onClick={onFileUpload}>
//                 Cargar
//               </button>
//           </div>
//         {this.fileData()}
//       </div>
//     );
// }

export default App;
