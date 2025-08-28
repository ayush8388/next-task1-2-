import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-blue-600 text-center min-h-9 flex items-center justify-between py-5 px-10 '>
      <Link href="/" className="text-4xl font-bold text-slate-200 text-center">BLOGS</Link>
      <div className='flex flex-row items-center justify-between gap-7 '>
        <Link href="/About" className='text-xl text-slate-200'>About</Link>
        <Link href="/projects" className='text-xl text-slate-200'>Projects</Link>
        <Link href="/contact" className='text-xl text-slate-200'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
