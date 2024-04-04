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
  const Allfiles = (e) =>{
    const selectedFile = e.target.value
    SetFile(prevFile => [...prevFile, selectedFile])
    // console.log(file)
    const fileOne = file;
    UplaodedImage(fileOne)

  }
  // for base 64converstion i will have to convert it before i turn it into an object
  const UplaodedImage = async(fileOne) =>{
    const base64 = await convetBase64(fileOne);
    console.log(base64)
  }
 const convetBase64 = (fileOne) =>{
  return new Promise((resolve, reject) => {
  const fileReader = new FileReader()
  const allthesefiles = fileReader.toDataURL(fileOne)
  console.log(allthesefiles)
  })

 }
  // const GettingBase64 (file) =>{
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL

  //     fileReader.onload = () =>(
  //       resolve(fileReader.result)
  //     );

  //     fileReader.onerror = (error) =>(
  //       reject(error)
  //     )
  //   })
  //   // console.log(OneFile)
  // }


  //  the end 
  const result = file.map((filename, index) =>({
    filename,
    signno:signs[index]

  }))

  const resultArray = (result) =>{
    localStorage.setItem('myresult', JSON.stringify(result))
  }

  const storedResults = JSON.parse(localStorage.getItem('myresult'))
  console.log(storedResults);
  useEffect(()=>{
    resultArray(result)
  
  })
  return (
  <AllSignature.Provider value={{sigCanvas, saved, clear, Allfiles, storedResults}}>
    {children}
  </AllSignature.Provider>
  )
}

export default AllSignatureProvider