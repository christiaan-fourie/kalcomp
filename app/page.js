'use client'
import { FaSun, FaRegMoon, FaEye, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import Calculator from './components/Calculator';

export default function Home() {
  // Set the theme
  const [theme, setTheme] = useState('system');

  const themeTransitions = {
    light: 'dark',
    dark: 'system',
    system: 'light',
  };

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(themeTransitions[theme]);
  };

  const themeIcons = {
    light: <FaSun size={20} />,
    dark: <FaRegMoon size={20} />,
    system: <FaEye size={20} />,
  };

  
  return (
    <main data-theme={theme}>
      <div className='flex items-center h-24 justify-between w-full px-12 border-b'>
        <h1 className='flex flex-row gap-4 items-center text-4xl font-thick tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#9A187B] to-[#444294]'>
          <Image src='/logo.png' alt='logo' width={48} height={48} />
          KALCOMP
        </h1>

        <div className='flex items-center gap-4' title='Toggle Theme'>
          <button onClick={toggleTheme}>{themeIcons[theme]}</button>
          <Link target='_blank' href='https://github.com/christiaan-fourie/Kalcomp'>
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
      <Calculator />
    </main>
  );
}
