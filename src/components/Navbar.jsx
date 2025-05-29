import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex items-center justify-between bg-gray-800 text-white px-5 py-3'>
        <h2 className='text-2xl'>Test</h2>
        <div className='flex items-center gap-4'> 
          <h4 className='text-xl'>Home</h4>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Contact</h4>
          <h4 className='text-xl'>Login</h4>
        </div>
      </nav>
    </>
  )
}

export default Navbar