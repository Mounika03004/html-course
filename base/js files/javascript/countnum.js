const string = prompt('Enter a string: ')

const result = countvowel(string);

console.log(result)

function countvowel(str){
       const count = str.match(/[aeiou]/gi).length;
       return count;
}