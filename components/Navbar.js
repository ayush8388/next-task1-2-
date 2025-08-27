import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-blue-600 text-center min-h-9 flex items-center justify-between py-5 px-10 absolute '>
      <h1 className="text-4xl font-bold  text-slate-200 text-center">BLOGS</h1>
      <div className='flex flex-row items-center justify-between gap-7 '>
        <h2 className='text-xl text-slate-200'>About</h2>
        <h2 className='text-xl text-slate-200'>Projects</h2>
        <h2 className='text-xl text-slate-200'>Contact</h2>

      </div>
    </div>
  )
}

export default Navbar
