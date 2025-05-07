
const string = prompt('Enter a  string: ');

const result = capitalizeFirstLetter(string);

console.log(result);

function capitalizeFirstLetter(str){
    
    const capitalized = str.charAt(0).toUppercase() + str.slice(1);

    return capitalized;
}


