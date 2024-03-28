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
    console.log(file)
  }
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