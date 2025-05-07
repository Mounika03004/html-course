const question =[
    {
        question:"What is a correct HTML markup for the document type declaration?",
        a:"<!DOCTYPE html>",
        b:"DOCTYPE html",
        c:"--DOCTYPE html",
        d:"HTML elements.",
        corrent:"a",
    },
    {
    question:"Which of the following headers is the largest and most important header?",
    a:"<h1>",
    b:"<h2>",
    c:"<h3>",
    d:"<h6>",
    corrent:"a",
},
{
    question:"What does HTML stand for?",
    a:"Hyper Text Markup Language" ,
    b:"Hyperlinks Text Markup Language",
    c:"High Text Markup Language" ,
    d:"Home Tool Markup Language",
    corrent:"a",
},
{
    question:"What tag is used to define a hyperlink in HTML?" ,
    a:"<link>",
    b:"<a>",
    c:"<href>",
    d:"<hyper>",
    corrent:"b",
},
{
    question:"What is the purpose of the <br> tag?",
    a:"Start a new paragraph",
    b:"Bold text",
    c:"Break line",
    d:"Create a list",
    corrent:"c",
},
{
    question:"Which HTML tag is used to define a table cell?",
    a:"<table>",
    b:"<th>",
    c:"<td>",
    d:"<tr>",
    corrent:"c",
}
];


const quiz = document.getElementById("quiz");
const resultEle = document.getElementById("result");


const answerEle = document.querySelectorAll('.answer');
const labelEle = document.querySelectorAll('.op_label');
const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const scoreEle = document.getElementById("score");
const reloadBtn = document.getElementById("reload");

let correntQtn=0;
let answered=0;

let submitted=false;
let userSelected={

}

loadQuiz()

function loadQuiz(){
    questionEle. innerText = question[correntQtn].question;
    questionEle.innerText = question[0].question;
    a_text.innerText = question[correntQtn].a;
    b_text.innerText = question[correntQtn].b;
    c_text.innerText = question[correntQtn].c;
    d_text.innerText = question[correntQtn].d;
    deSelectAnswer()
     
    if (userSelected[correntQtn]){
        let selected = userSelected[correntQtn];
        document.getElementById(selected).checked = true
    }
    if(correntQtn == question.length -1 ){
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
    if (submitted){
        let actualAns = question[correntQtn].corrent;
        let userSelected = userSelected[correntQtn];
        (labelEle)=>{
            labelEle.classList.remove('corrent');
            labelEle.classList.remove('wrong');
        }
        if (actualAns ==userSelected){

            let op = actualAns +"_text";
            document.getElementById(op).classList.add('correct')
        }
        else{
           let correct_op = actualAns +"_text";
           document.getElementById(correct_op).classList.add('correct');
           let user_op = userSelected  + "_text";
           document.getElementById(correct_op).classList.add('wrong');
        }
    }
}
function deSelectAnswer(){
  answerEle.forEach(
    (answerEle)=> {
        answerEle.checked = false
    }
  )
}
nextBtn.addEventListener(
    'click', ()=>{
        let answer = getSelected();
        if(answer){
            if(answer == question[correntQtn].corrent) {
                answered++
            
            }
            correntQtn++;
            if(correntQtn < question.length){
                loadQuiz()
            }
        }
    }
)

prevBtn.addEventListener(
    'click',()=>{
        if(correntQtn>0){
            correntQtn--

            loadQuiz()
        }
    }
)
 
submitBtn.addEventListener(
    'click',()=>{
        if(getSelected()){
            quiz.style.display="none";
            resultEle.style.display="block";
            scoreEle.innerText= answered +"/" + question.length + "question answered correctly";
        }
    }
)
 function getSelected(){
        let answer;
        answerEle.forEach(
            (answerEle) => {
                if(answerEle.checked) {
                    answer = answerEle.id;
                    userSelected[correntQtn]=answer
                }
            }
        )
        return answer
 }
 function loadAnswer(){
    correntQtn=0;
    quiz.style.display="block";
    resultEle.style.display="none";
    answerEle.forEach(
        (answerEle) => {
            answerEle.disabled=true;
        }
    )
    submitBtn.style.display="none";
    nextBtn.style.display="block";
     loadQuiz()
 }


