const person = {
    name : 'mounika',
    age : 21,
    hobbies : ['reading', 'games', 'coding'],
    greet: function(){
        console.log("hello mounika");
    },
    score:{
        maths: 90,
        telugu: 80,
    },
    greet: function(){
        console.log("hello mounika");
    },
};
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[1]);
person.greet();
console.log(person.score);
console.log(typeof person.greet);
console.log(typeof person.score);
person.greet();