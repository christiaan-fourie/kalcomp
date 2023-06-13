'use client'
import { FaSun, FaRegMoon, FaEye, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import styles from './page.module.css'
import Calculator from './components/Calculator'
import Display from './components/Display'

export default function Home() {

  const [theme, setTheme] = useState('system')

  // Toggle between themes
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else if (theme === 'system') setTheme('light')
  }

  return (
    <main data-theme={theme}>
      <header className='flex items-center h-24 justify-between w-full px-12 border-b'>
        <h1 className='flex flex-row gap-4 items-center text-4xl font-thin tracking-tighter'>
          {/* Next Image */}
          <Image src='/logo.png' alt='logo' width={48} height={48} />          
          KALCOMP
        </h1>


        {/* A button that toggles between the themes */}
        <div className='flex items-center gap-4' title='Toggle Theme' >
          {theme === 'light' && <button onClick={() => toggleTheme()}><FaSun size={20} /></button> }
          {theme === 'dark' && <button onClick={() => toggleTheme()}><FaRegMoon size={20} /></button> }
          {theme === 'system' && <button onClick={() => toggleTheme()}><FaEye size={20} /></button> }
          {/* A Github Icon */}
          <Link target='_blank' href='https://github.com/christiaan-fourie/Kalcomp' ><FaGithub size={20} /></Link>
        </div>
      </header>
      <Display />
      <Calculator />
    </main>
  )
}
