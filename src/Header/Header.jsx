import React from 'react'

function Header() {
  return (
    <>
    <div className='header border-2 border-green-800 flex justify-between items-center  w-full px-5 py-3 fixed top-0 left-0 before:contents-0 before:absolute before:top-0 before:-left-full'>
      <a href="#" className='logo'>logo</a>
      <div className='navbar'>
        <a href=""> New</a>
        <a href="">Saved</a>
        <a href="">Documents</a>
        {/* <a href=""></a> */}

      </div>
    </div>
    </>
  )
}

export default Header