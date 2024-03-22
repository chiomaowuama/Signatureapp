import React from 'react'
import { useForm } from 'react-hook-form'


function NewDocument() {
    const form = useForm()
 const { register} = form
  console.log(register)
  return (
    <>
      <div  className='landscape w-full h-screen '>
      {/* flex flex-col justify-center items-center */}
        <div className='landscapess  w-full h-full scroll overflow-y-scroll flex flex-col justify-start py-10 items-center '>
          <div className='w-4/6 lg:w-3/5  text-white mt-20'> 
          <p className='text-white font-semibold font-bigtext text-4xl text-center'>Personal Details</p>
            <form className=' lg:w-3/5 mx-auto space-y-2'>
              <div className='flex flex-col  space-y-2 '>
                <label htmlFor=""  className='text-xl pl-2 font-bigtext'>FirstName</label>
                <input type="text" name="" id=""className='pl-4 rounded-lg text-black outline-none ' {...register('username')} />
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Surname</label>
                <input type="text" name="" id="" className='rounded-lg  pl-4 text-black outline-none' {...register('username')}/>
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Email</label>
                <input type="email" name="" id=""  className='rounded-lg  pl-4 text-black outline-none'/>
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Phone</label>
                <input type="tel" name="" id="" className='rounded-lg  pl-4 text-black outline-none'/>
              </div>
          
              <div className='flex flex-col  space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Date</label>
                <input type="datetime" name="" id="" className='rounded-xl py-1 pl-4 text-black outline-none'/>
              </div>
              <div className=' flex flex-col  space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Review</label>
                <textarea name="" id="" cols="30" rows="5" className='rounded-xl py-1 pl-4 text-black outline-none'/>
              </div>
              <div className='border-2 border-green-900 flex flex-col  space-y-2'>
                <label htmlFor="" className='text-xl pl-2 font-bigtext'>Signature</label>
                <input type="text" name="" id="" className='rounded-xl py-1 pl-4 text-black outline-none'/>
              </div>
              <div>
                <input type="file" name="" id="" className='rounded-xl py-1  text-black outline-none'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewDocument