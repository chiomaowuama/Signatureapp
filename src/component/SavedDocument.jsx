import React from 'react'
import Popup from 'reactjs-popup'
import SignaturePad from "react-signature-canvas"

function SavedDocument() {
  return (
    <div className='border-2 border-green-300 w-full h-screen bg-green-900 flex justify-center items-center'>
      <div className='border-2 border-yellow-600 w-3/5 h-3/5  flex justify-center items-start'>

        <Popup modal trigger={

          <button type="button" className='border-2 border-black bg-white w-1/5 uppercase  font-medium  '>click me </button>
        }>
          <h1 className='bg-white'>hello</h1>
          <SignaturePad />
        </Popup>
      </div>
    </div>
  )
}

export default SavedDocument