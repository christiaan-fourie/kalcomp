'use client'


import React from 'react'

import { FaBackspace } from 'react-icons/fa'

const Calculator = () => {

  const buttons = [
    { id: 1, value: '%' },
    { id: 2, value: 'C' },
    { id: 3, value: 'CE' },
    { id: 4, value: <FaBackspace size={20} /> },
    { id: 5, value: '1/x' },
    { id: 6, value: 'x^2' },
    { id: 7, value: '2sqrt(x)' },
    { id: 8, value: '/' },
    { id: 9, value: '7' },
    { id: 10, value: '8' },
    { id: 11, value: '9' },
    { id: 12, value: '*' },
    { id: 13, value: '4' },
    { id: 14, value: '5' },
    { id: 15, value: '6' },
    { id: 16, value: '-' },
    { id: 17, value: '1' },
    { id: 18, value: '2' },
    { id: 19, value: '3' },
    { id: 20, value: '+' },
    { id: 21, value: '+/-' },
    { id: 22, value: '0' },
    { id: 23, value: '.' },
    { id: 24, value: '=' },
  ]

  return (
    <div className='grid grid-cols-4 gap-2 justify-center mx-4 py-12 md:w-1/2 md:mx-auto' >
      {buttons.map((button) => (
        <button
          key={button.id}
          className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'
        >
          {button.value}
        </button>
      ))}
    </div>
  )
}

export default Calculator
