'use client'
import { FaSun, FaRegMoon, FaEye } from 'react-icons/fa'

import { useState, useEffect } from 'react'

import styles from './page.module.css'

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
        <h1 className={styles.title}>
          kalcomp
        </h1>


        {/* A button that toggles between the themes */}
        <div className='' title='Toggle Theme' >
          {theme === 'light' && <button onClick={() => toggleTheme()}><FaSun size={20} /></button> }
          {theme === 'dark' && <button onClick={() => toggleTheme()}><FaRegMoon size={20} /></button> }
          {theme === 'system' && <button onClick={() => toggleTheme()}><FaEye size={20} /></button> }
        </div>


      </header>
      
    </main>
  )
}
