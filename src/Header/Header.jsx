import React from 'react'
// import { Link,Navlink } from 'react-router-dom'
import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <>
    <div className='header  flex  py-5 '>
      <div className=' w-2/5  flex justify-start items-center px-3 font-bigtext font-semibold'>
      <Link to="/"  className='logo text-white font-bigtext  text-base font-semibold cursor-default  lg:ml-4'>
        SIGNATURE             
        </Link>
      </div>
      <div className='navbar w-3/5 flex justify-around lg:justify-end items-center   lg:gap-4 text-center font-bigtext font-semibold'>
        <NavLink to="NewDocument" className={({isActive}) => `text-white lg:w-1/5 px-2 lg:px-0 ${isActive ? "text-red-700": " text-blue-700" }`}>
          Signup
        </NavLink>
        <NavLink to="AllDocument" className={({isActive}) => `text-white lg:w-1/5 px-2 lg:px-0 ${isActive ? "text-red-700": " text-blue-700" }`}>
          Create
        </NavLink>
        <NavLink to="SavedDocument" className={({isActive}) => `text-white lg:w-1/5 px-2 lg:px-0 ${isActive ? "text-red-700": " text-blue-700" }`}>
          HISTORY
        </NavLink>      
      </div>
    </div>
    
    </>
  )
}

export default Header