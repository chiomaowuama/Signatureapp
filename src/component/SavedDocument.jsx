import React, { useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import SignaturePad from "react-signature-canvas"
import AllSignature from '../context/AllSignature';
// import { Result } from 'postcss';

function SavedDocument() {
  const{storedResults} = useContext(AllSignature)
  const [ baseimages, setBaseimages] = useState([])
  // console.log('heloo');

  console.log(baseimages);

  
  useEffect(() => {
    setBaseimages(storedResults)
  })
  return (
    <div className=' landscape w-full h-screen'>
      <div className='landscapes   w-full h-full flex  flex-col justify-center items-center '>
        {baseimages.map(function(baseimage){
          return(
            <div className='border-2 border-yellow-600 w-2/5 h-2/5'>
            <img src={baseimage.filename} alt=" hello"/>
            <img src={baseimage?.signno} alt="hi" />
            </div>
          )

        })}
    
      </div>
    </div>
  )
}

export default SavedDocument