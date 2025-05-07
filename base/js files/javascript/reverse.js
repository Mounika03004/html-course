const string = prompt('Enter the string: ');

const result = reverseString(string);

console.log(result)

function reverseString(str){
    let newString = "";
    for (let i = str.length - 1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}
