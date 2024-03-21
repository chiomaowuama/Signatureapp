import React from 'react'

function Home() {
  return (
    <>
    <div className=' landscape w-full h-screen'>
      <div className='landscapes   w-full h-full flex  flex-col justify-center items-center '>
        <div className='w-4/6  border-2 border-yellow-900 text-4xl text-white capitalize font-bigtext  px-2 '>
          <p><span className='text-5xl hover:text-red-800 cursor'>S</span>igns understands that a signature is your unique identity. The opportunity to help you discover what identity best works for you is our goal, click here to create your forever signature</p>
          {/* <button className='bg-white text-black border-2 border-white rounded-2xl w-2/6 px-2 py-1 shadow-2xl '>Click Here</button> */}
          {/* <div className=' '>
            <div className='hexagon rotate-90'></div>
          </div> */}
        </div>
        <div className='w-4/6  relative  -bottom-14 left-1'>
            <div className='hexagon rotate-90  absolute shadow-xl  '> 
            </div>
            <div className='absolute -top-3 left-0'>
            <div className='movinglight'>
            <span className='span'></span>
            {/* https://metatags.io/ */}
            {/* npm install vue-meta@^3.0.0-alpha.10 */}
            {/* import { useMeta } from 'vue-meta'

            useMeta({
              title: 'Home',
              description: 'Something in you',
            }) */}

            </div>
            </div>
            <p className='absolute top-2  z-10 left-2 font-bigtext font-semibold tracking-wider text-2xl cursor-pointer hover:text-red-700 text-white'>clickhere</p>
          </div>
      </div>
        

    </div>
    </>
  )
}

export default Home