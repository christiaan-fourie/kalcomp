// Calculate a string without using eval
export function calculate(str: string): number {
    str = str.replace(/\s+/g, ''); // Remove spaces from the input string
    // Replace instances of 'x' and '÷' with '*' and '/'
    str = str.replace(/x/g, '*').replace(/÷/g, '/');
    
  
    // Check for invalid characters
    if (!/^[\d+\-*/\(\)\.]+$/.test(str)) {
      throw new Error('Invalid characters in the input string.');
    }
  
    // Handle parentheses
    while (str.includes('(') || str.includes(')')) {
      const start = str.lastIndexOf('(');
      const end = str.indexOf(')', start);
      if (start === -1 || end === -1) {
        throw new Error('Mismatched parentheses in the input string.');
      }
      const result = calculate(str.slice(start + 1, end));
      str = str.slice(0, start) + result + str.slice(end + 1);
    }
  
    const performOperation = (operator, operation) => {
      while (str.includes(operator)) {
        const regex = new RegExp(`(-?\\d+(?:\\.\\d+)?)(?:\\${operator})(-?\\d+(?:\\.\\d+)?)`);
        const match = str.match(regex);
        if (!match) {
          throw new Error('Invalid input string.');
        }
        const leftValue = parseFloat(match[1]);
        const rightValue = parseFloat(match[2]);
        const result = operation(leftValue, rightValue);
        str = str.replace(regex, result);
      }
    };
  
    performOperation('*', (a, b) => a * b);
    performOperation('/', (a, b) => {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    });
    performOperation('+', (a, b) => a + b);
    performOperation('-', (a, b) => a - b);
  
    return parseFloat(str);
}