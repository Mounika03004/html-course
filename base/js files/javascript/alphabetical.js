const string = prompt('Enter the sentence: ');

const words = string.split(' ');

words.sort();
console.log('the sorted words are: ');

for (const element of words){
    console.log(element);
}