import React from 'react'
// import { Link,Navlink } from 'react-router-dom'
import { Link} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <>
    <div className='header  flex  py-5 '>
      <div className=' w-2/5  flex justify-start items-center px-3 '>
      {/* <Link to="/">
      </Link> */}
      <Link to="/"  className='logo text-white text-base font-semibold cursor-default  lg:ml-4 '>
      Signature             
      </Link>
      
      </div>
      <div className='navbar w-3/5 flex justify-around lg:justify-end items-center  lg:gap-4 text-center'>
        {/* <NavLink to="NewDocument" className={({isActive}) => `text-red-500`}>
          New
        </NavLink>
        <Navlink to='NewDocument' className={({isActive}) =>`text-white text-base transition-all ${isActive ? "text-red-600" : "text-white"} text-base ml-9`}>
        New
        </Navlink> */}
        
        <a href="NewDocument" className='lg:w-1/5'> New</a>
        <a href="" className='lg:w-1/5 '>Saved</a>
        <a href="" className='lg:w-1/5  '>Documents</a>
        
      </div>
    </div>
    
    </>
  )
}

export default Header