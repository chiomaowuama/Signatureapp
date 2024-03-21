import React from 'react'

function NewDocument() {
  return (
    <>
      <div  className='landscape w-full h-screen'>
        <div className='landscapes   w-full h-full flex flex-col justify-center items-center overflow-scroll'>
            <form className='border-2 border-red-700 '>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">FirstName</label>
                <input type="text" name="" id="" />
              </div>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Surname</label>
                <input type="text" name="" id="" />
              </div>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
              </div>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Phone</label>
                <input type="tel" name="" id="" />
              </div>
          
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Date</label>
                <input type="datetime" name="" id="" />
              </div>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Review</label>
                <textarea name="" id="" cols="30" rows="5"/>
              </div>
              <div className='border-2 border-green-900 flex flex-col'>
                <label htmlFor="">Signature</label>
                <input type="text" name="" id="" />
              </div>
              <div>
                <input type="file" name="" id="" />
              </div>
             

            </form>
        </div>
      </div>
    </>
  )
}

export default NewDocument