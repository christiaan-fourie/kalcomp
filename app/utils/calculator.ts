// Calculate a string without using eval
export function calculate(str: string): number {

    // Preprocess the input string    
    str = str.replace(/\s+/g, ''); // Remove all spaces from the input string    
    str = str.replace(/x/g, '*').replace(/÷/g, '/'); // Replace instances of 'x' and '÷' with '*' and '/'
    str = str.replace(/--/g, '+'); // Replace all instances of '--' with '+'
  
    // Check for invalid characters
    if (!/^[\d+\-*/\(\)\.]+$/.test(str)) {
      str='Invalid characters in the input string.';
    }
  
    // Handle parentheses
    while (str.includes('(') || str.includes(')')) {
      const start = str.lastIndexOf('(');
      const end = str.indexOf(')', start);
      if (start === -1 || end === -1) {
        str='Mismatched parentheses in the input string.';
      }
      const result = calculate(str.slice(start + 1, end));
      str = str.slice(0, start) + result + str.slice(end + 1);
    }
  
    // Handle negative values
    const performOperation = (operator: string, operation: any ) => {
      while (str.includes(operator)) {
        const regex = new RegExp(`(-?\\d+(?:\\.\\d+)?)(?:\\${operator})(-?\\d+(?:\\.\\d+)?)`);
        const match = str.match(regex);
        if (!match) {
          str='Invalid input string.';
        }
        const leftValue = parseFloat(match[1]);
        const rightValue = parseFloat(match[2]);
        const result = operation(leftValue, rightValue);
        str = str.replace(regex, result);
      }
    };

    // Handle multiplication and division
    performOperation('*', (a: number, b:number) => a * b);
    performOperation('/', (a:number, b:number) => {
      if (b === 0) {
        str='Division by zero is not allowed.';
      }
      return a / b;
    });

    // Handle addition and subtraction
    performOperation('+', (a: number, b:number) => a + b);
    performOperation('-', (a: number, b:number) => a - b);
  
    // Return the final result
    return parseFloat(str);
}