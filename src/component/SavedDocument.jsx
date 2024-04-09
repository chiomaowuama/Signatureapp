import React, { useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import SignaturePad from "react-signature-canvas"
import AllSignature from '../context/AllSignature';
// import { Result } from 'postcss';

function SavedDocument() {
  const{storedResults} = useContext(AllSignature)
  const [ baseimage, setBaseimage] = useState()
  // console.log('heloo');

  useEffect(() => {
    setBaseimage(storedResults)
    console.log( baseimage);
  })
  return (
    <div className=' landscape w-full h-screen'>
      <div className='landscapes   w-full h-full flex  flex-col justify-center items-center '>
        {storedResults.map(function(storedResult){
          return(
            <div className='border-2 border-yellow-600 w-2/5 h-2/5'>
            {/* <p>{storedResult.filename}</p> */}
            {/* <p>{storedResult.signno}</p> */}
            <img src={baseimage} alt=" hello"/>
            </div>
          )

        })}
    
      </div>
    </div>
  )
}

export default SavedDocument