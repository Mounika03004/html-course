let num1 = parseFloat(prompt("Enter the frist number"));
let num2 = parseFloat(prompt("Enter the second number"));
let num3 = parseFloat(prompt("Enter the thrid number"));
let largest;

if (num1 < num2 && num1 < num3){
    largest = num1;
}
else if (num2 < num1 && num2 < num3){
    largest = num2;
}
else{
    largest = num3;
}
console.log(largest)
