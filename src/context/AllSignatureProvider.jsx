// import React, { useState } from 'react'
import React, { useRef, useState } from 'react'
import SignaturePad from "react-signature-canvas";
import getTrimmedCanvas from "react-signature-canvas"

import AllSignature from './AllSignature'

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
  console.log(result)
  return (
  <AllSignature.Provider value={{sigCanvas, saved, clear, Allfiles}}>
    {children}
  </AllSignature.Provider>
  )
}

export default AllSignatureProvider