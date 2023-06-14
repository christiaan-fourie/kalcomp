'use client'


import React from 'react'
import { useState } from 'react'

// Import calculator utils
import { calculate } from '../utils/calculator'

import { FaBackspace } from 'react-icons/fa'

const Calculator = () => {

  // Set the calcultor string
  const [calcString, setCalcString] = useState('0')

  // Input handler
  const handleInput = ({input}) => {

    // Handle special cases
    if (input === 'C' || input === 'CE' ) {
      setCalcString('0')
      return
    }

    // Handle backspace
    if (input === 'backspace') {
      console.log('backspace');
      
      // New calcString minus the last character
      const newCalcString = calcString.slice(0, -1)
      // If the new calcString is empty, set it to 0
      if (newCalcString === '') {
        setCalcString('0')
      } else {
        setCalcString(newCalcString)
      }
      return
    }

    // Handle numbers
    if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9') {
      console.log(input, ' is a number') 
      if (calcString === '0') {
        setCalcString(input)
      } else {
        setCalcString(calcString + input)
      }
      return
    }

    // Handle operators only works if there is a number entered before it
    if (input === '+' || input === '-' || input === 'x' || input === '÷') {
      // Get the last character of the calcString
      const lastChar = calcString.slice(-1)
      // Check if the last character is a number
      if (lastChar === '0' || lastChar === '1' || lastChar === '2' || lastChar === '3' || lastChar === '4' || lastChar === '5' || lastChar === '6' || lastChar === '7' || lastChar === '8' || lastChar === '9') {
        setCalcString(calcString + input)
      }
      // If the last character is an operator, replace it with the new operator
      if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
        setCalcString(calcString.slice(0, -1) + input)
      }
      return
    }

    // Handle decimal point
    if (input === '.') {
      // Get the last character of the calcString
      const lastChar = calcString.slice(-1)
      // Check if the last character is a number
      if (lastChar === '0' || lastChar === '1' || lastChar === '2' || lastChar === '3' || lastChar === '4' || lastChar === '5' || lastChar === '6' || lastChar === '7' || lastChar === '8' || lastChar === '9') {
        setCalcString(calcString + input)
      }
      return
    }

    // Handle percentage
    if (input === '%') {
      // Add the percentage sign to the calcString if the last character is a number
      const lastChar = calcString.slice(-1)
      if (lastChar === '0' || lastChar === '1' || lastChar === '2' || lastChar === '3' || lastChar === '4' || lastChar === '5' || lastChar === '6' || lastChar === '7' || lastChar === '8' || lastChar === '9') {
        setCalcString(calcString + input)
      }
      // If the last character is an operator, replace it with the percentage sign
      if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
        setCalcString(calcString.slice(0, -1) + input)
      }
      return
    }

    // Handle equals
    if (input === '=') {
      // Get the last character of the calcString
      const lastChar = calcString.slice(-1)
      // Check if the last character is a number
      if (lastChar === '0' || lastChar === '1' || lastChar === '2' || lastChar === '3' || lastChar === '4' || lastChar === '5' || lastChar === '6' || lastChar === '7' || lastChar === '8' || lastChar === '9') {
        const result = calculate(calcString)
        setCalcString(result.toString())
      }
      return
    }
    


  }

  const buttons = [
    { id: 1, value: '%', display: '%' },
    { id: 2, value: 'C', display: 'C' },
    { id: 3, value: 'CE', display: 'CE' },
    { id: 4, value: 'backspace', display: <FaBackspace className='mx-auto' size={25} /> },
    { id: 5, value: '1/x', display: '1/x' },
    { id: 6, value: 'x²', display: 'x²' },
    { id: 7, value: '√x', display: '√x' },
    { id: 8, value: '÷', display: '÷' },
    { id: 9, value: '7', display: '7' },
    { id: 10, value: '8', display: '8' },
    { id: 11, value: '9', display: '9' },
    { id: 12, value: 'x', display: 'x' },
    { id: 13, value: '4', display: '4' },
    { id: 14, value: '5', display: '5' },
    { id: 15, value: '6', display: '6' },
    { id: 16, value: '-', display: '-' },
    { id: 17, value: '1', display: '1' },
    { id: 18, value: '2', display: '2' },
    { id: 19, value: '3', display: '3' },
    { id: 20, value: '+', display: '+' },
    { id: 21, value: '+/-', display: '+/-' },
    { id: 22, value: '0', display: '0' },
    { id: 23, value: '.', display: '.' },
    { id: 24, value: '=', display: '=' },
  ]



  return (
    <div>
      <div className='w-full text-end text-7xl font-mono p-6 bg-black bg-opacity-20'>
        {calcString}
      </div>
      <div className='grid grid-cols-4 gap-2 justify-center mx-4 pt-6 md:w-1/2 md:mx-auto' >
        {buttons.map((button) => (
          <button
            onClick={() => handleInput({ input: button.value })}
            key={button.id}
            className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'
          >
            {button.display}
          </button>
        ))}
      </div>
    </div>    
  )
}

export default Calculator
