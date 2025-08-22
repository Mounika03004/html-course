let operator = prompt('Enter the operator(either +,-,*,/):');

const number1 = parseInt(prompt('Enter the first number: '));
const number2 = parseInt(prompt('Enter the second number: '));
 let result

 if (operator == '+'){
    result = number1+number2;
 }
 else if (operator == '-'){
    result = number1-number2;
 }
 else if (operator == '*'){
    result = number1*number2;
 }
 else{
    result = number1/number2;
 }

 document.write(`${number1} ${operator} ${number2} = ${result}`);