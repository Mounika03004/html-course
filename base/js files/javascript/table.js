const number = parseInt(prompt("Enter an integer:"));

for(let i = 1; i <= 10; i++){

    const result = i*number;

    console.log(`${number} * ${i} = ${result}`);
}

const num1 =parseInt(prompt("Enter an integer: "));
const range =parseInt(prompt("Enter the range: "));

for(let i = 1; i <= range; i++){

    const result1 = i*num1;

    console.log(`${num1} * ${i} = ${result1} `);
}