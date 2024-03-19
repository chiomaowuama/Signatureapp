import React from 'react'


function Header() {
  return (
    <>
    <div className='header border-2 border-green-800 flex justify-between items-center '>
      <a href="#" className='logo text-white text-base font-semibold cursor-default'>Signature</a>
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