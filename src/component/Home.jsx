import React from 'react'

function Home() {
  return (
    <>
    <div className=' landscape w-full h-screen'>
      <div className='landscapes  w-full h-full flex  justify-center items-center'>
        <div className='space-y-8 w-4/6  text-4xl text-white capitalize font-bigtext  px-2 '>
          <p><span className='text-5xl hover:text-red-800 cursor'>S</span>igns understands that a signature is your unique identity. The opportunity to help you discover what identity best works for you is our goal, click here to create your forever signature</p>
          <button className='bg-white text-black border-2 border-white rounded-2xl w-2/6 px-2 py-1 shadow-2xl '>Click Here</button>
        </div>
      </div>
        

    </div>
    </>
  )
}

export default Home