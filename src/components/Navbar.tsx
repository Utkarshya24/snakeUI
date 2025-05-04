import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <Link href="/" className='text-[18px] text-gray-500 hover:underline hover:text-primary transition-colors duration-300'>Home</Link>
        <Link href="/Table" className='text-[18px] text-gray-500 hover:underline hover:text-primary transition-colors duration-300'>Table</Link>
    </div>
  )
}

export default Navbar