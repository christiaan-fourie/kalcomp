'use client'

// Import React dependencies
import { useState } from 'react'

// Import calculator utils
import { calculate } from '../utils/calculator'

// Icons
import { FaBackspace } from 'react-icons/fa'

// Calculator component
const Calculator = () => {
  // Set the calculator string
  const [calcString, setCalcString] = useState("0");

  // Helper function to check if input is a number
  const isNumber = (input:string) => /^[0-9]$/.test(input);

  // Helper function to check if input is an operator
  const isOperator = (input:string) => /^[+\-x÷]$/.test(input);

  // Input handler
  const handleInput = ({ input }) => {
    const lastChar = calcString.slice(-1);

    switch (input) {
      case "C":
      case "CE":
        setCalcString("0");
        break;

      case "backspace":
        setCalcString(calcString.slice(0, -1) || "0");
        break;

      case ".":
        if (isNumber(lastChar)) setCalcString(calcString + input);
        break;

      case "=":
        if (isNumber(lastChar)) setCalcString(calculate(calcString).toString());
        break;

      case "%":
        if (isNumber(lastChar) || isOperator(lastChar))
          setCalcString(calcString.slice(0, -1) + input);
        break;

      default:
        if (isNumber(input)) {
          setCalcString(calcString === "0" ? input : calcString + input);
        } else if (isOperator(input)) {
          if (isNumber(lastChar) || isOperator(lastChar))
            setCalcString(calcString.slice(0, -1) + input);
        }
    }
  }

  // Calculator buttons
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
