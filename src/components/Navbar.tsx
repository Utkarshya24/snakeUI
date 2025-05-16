"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname(); // Get the current route

  return (
    <div className='flex justify-between items-center bg-white shadow-md p-4'>
      <Image src={"./snakeui.svg"} alt="logo" width={100} height={100} className='w-[150px] h-[50px]' />
      <div className='flex gap-2 justify-center items-center'>
        <Link
          href="/"
          className={`text-[18px] ${
            currentPath === '/' ? 'text-primary font-bold' : 'text-gray-500'
          } hover:underline hover:text-primary transition-colors duration-300`}
        >
          Home
        </Link>
        <Link
          href="/Table"
          className={`text-[18px] ${
            currentPath === '/Table' ? 'text-primary font-bold' : 'text-gray-500'
          } hover:underline hover:text-primary transition-colors duration-300`}
        >
          Table
        </Link>

        <Link
          href="/card"
          className={`text-[18px] ${
            currentPath === '/card' ? 'text-primary font-bold' : 'text-gray-500'
          } hover:underline hover:text-primary transition-colors duration-300`}
        >
            Cards
        </Link>
        <Link
          href="/Slider"
          className={`text-[18px] ${
            currentPath === '/card' ? 'text-primary font-bold' : 'text-gray-500'
          } hover:underline hover:text-primary transition-colors duration-300`}
        >
            Slider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;