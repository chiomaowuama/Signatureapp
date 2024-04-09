// import React, { useState } from 'react'
import React, { useRef, useState } from 'react'
import SignaturePad from "react-signature-canvas";
import getTrimmedCanvas from "react-signature-canvas"

import AllSignature from './AllSignature'
import { useEffect } from 'react';

const AllSignatureProvider = ({children}) =>{
  const sigCanvas = useRef({});
  const [file, SetFile] = useState([]);
  const [signs, setSigns] = useState([])

  


  const clear = () => {
    sigCanvas.current.clear()
  }
  const saved = ()=>{
    const trimCanvas = sigCanvas.current.getTrimmedCanvas();
    const trimmedCanvas = trimCanvas.toDataURL("image/png");
    setSigns(prevSigns => [...prevSigns, trimmedCanvas + [1]])
    // console.log(trimmedCanvas)
    console.log(signs)
  }
  const Allfiles = async(e) =>{
    const selectedFile = e.target.files[0];
    // console.log(file)
    // const fileOne = file;
    const base64 = await convertBase64(selectedFile);
    SetFile(prevFile => [...prevFile, base64]);
    console.log(base64)
    
  }
  // for base 64converstion i will have to convert it before i turn it into an object
  
  const convertBase64 = (selectedFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile);
      // console.log(fileReader)
      
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject('sorry there is a porblem', error);
      };
    });
  };



  //  the end 
  const result = file.map((filename, index) =>({
    filename,
    signno:signs[index]

  }))

  // console.log(result);
  const resultArray = (result) =>{
    console.log(result)
    localStorage.setItem('myresult', JSON.stringify(result))
    // if(result >= 2){
      console.log(result)
    // }
  } 


  const storedResults = JSON.parse(localStorage.getItem('myresult'))
  useEffect(()=>{
    resultArray(result)
  
    // dont forget to add storedResults to the values u sending
  })
  return (
  <AllSignature.Provider value={{sigCanvas, saved, clear, Allfiles, storedResults}}>
    {children}
  </AllSignature.Provider>
  )
}

export default AllSignatureProvider