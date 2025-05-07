// program to remove a property from an object

const student = {
    name:'mounika',
    age:21,
    hobbies: ['reading', 'games', 'coding'],
    greet: function(){
        console.log(hello)
    },
    score:{
        maths:90,
        telugu:85
    }
};

delete student.greet;
delete student['score'];
delete student.hobbies;
console.log(student)