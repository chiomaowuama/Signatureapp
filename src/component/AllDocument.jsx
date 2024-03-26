import React, { useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import SignaturePad from "react-signature-canvas";
import getTrimmedCanvas from "react-signature-canvas"
import { useEffect } from 'react';



function AllDocument() {
  const sigCanvas = useRef({});
  const [ file, setFile] = useState([])
  const [signs, setSigns] = useState([])
  
  const clear = () =>sigCanvas.current.clear()
  

  const save = () => {
    const trimCanvas = sigCanvas.current.getTrimmedCanvas();
    const trimmedCanvas = trimCanvas.toDataURL("image/png");
    setSigns(prevSign => [...prevSign, trimmedCanvas])
    console.log(signs)
  }
  const handleAllChanges = (e) =>{
    const selectedFile = e.target.value
    setFile(prevFile => [...prevFile, selectedFile])
  }

  const result = file.map((filename, index) =>({
    filename,
    signno:signs[index]

  }))
  console.log(result)


  return (
    <>
   <div className=' landscape w-full h-screen'>
      <div className='landscapes   w-full h-full flex  flex-col justify-center items-center '>
        <div className='w-4/6 mb-5 text-2xl lg:text-3xl text-white capitalize font-bigtext  px-2'>
          <p><span className='text-5xl hover:text-red-800 cursor'>S</span>igns allows you upload files of any kind and stores them for you.</p>
          <input type="file" name="" id=""  className=" border-2 border-white w-full" onChange={handleAllChanges} />
        </div>
        <div className='w-4/6 text-2xl lg:text-3xl text-white capitalize font-bigtext  px-2 '>
          <p>Here is the opportunity discover what best works for you click here to create your forever signature</p>
        </div>
       
          <Popup modal trigger={
          <div className='w-4/6  relative  -bottom-14 left-1'>
            <div className='hexagon rotate-90  absolute shadow-xl  '> 
            </div>
            <div className='absolute -top-3 left-0'>
            <div className='movinglight'>
            <span className='span'></span>
            </div>
            </div>
            
            
            <p className='absolute top-2  z-10 left-2 font-bigtext font-semibold tracking-wider text-2xl cursor-pointer hover:text-red-700 text-white'>clickhere</p>
          </div>}
          closeOnDocumentClick={false}
           >
            {/* the popup allowa us to pass a function as its child , this child then has close as a parameter . this close will now handle the */}
           {close =>(
            <>
            <div className='lg:w-full w-80 h-96 lg:h-4/5'>
            <SignaturePad canvasProps={{ className:"bg-white w-full h-full "}} ref={sigCanvas} />
            <div className='w-full flex '>
            <button onClick={clear} className='w-1/2 bg-white outline-none border-t-2 border-darkblues'>clear</button>
            <button onClick={close} className='w-1/2 bg-white outline-none border-t-2 border-darkblues'>close</button>
            <button onClick={save} className='w-1/2 bg-white outline-none border-t-2 border-darkblues'>save</button>
            </div>
            </div>
            </>
           )}
            </Popup>
         
      </div>
    </div>

      
    </>
  )
}

export default AllDocument