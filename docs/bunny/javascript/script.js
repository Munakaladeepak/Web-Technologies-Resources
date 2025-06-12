
let questions = [
{
        id: 1,
        question: "javascript is an _______ langauage?",
        answer: "object-oriented",
        options: [
          "object-oriented",
          "object-based",
          "procedural",
          "None of these"
        ]
      },
{
        id: 2,
        question: "which of the following keywords is used to define a variable in javascript  ?",
        answer: "both a and b",
        options: [
          "var",
          "let",
          "both a and b",
          "none of the above"
        ]
      },
{
        id: 3,
        question: "which of the following methods is used to access HTML elements using javascript ?",
        answer: "both a and b",
        options: [
          "getElementId()",
          "getElementByClassName()",
          "both a and b",
          "none of these"
        ]
      },
{
        id: 4,
        question: "which of the following methods can be is used to display data in some form using javascript",
        answer: "all the above",
        options: [
          "document.write()",
          "console.log()",
          "window.alert()",
          "all the above"
        ]
      },
{
        id: 5,
        question: "How can a datatype be declared to be a constant type?",
        answer: "const",
        options: [
          "var",
          "let" ,
          "const",
          "constant"
 
      ]
      },
{
        id: 6,
        question: "how does FOR loop start?",
        answer: "for(i=0;i<=5;i++)",
        options: [
          "for(i=0;i<=5;i++)",
          "for(i<=5;i++)",
          "for(i=0;i<=5;)",
          "for i=1 to 5"
        ]
      },
{
        id: 7,
        question: "how does a WHILE loop start?",
        answer: "while(i<=10)",
        options: [
          "while(i<=10;i++)",
          " both a and c",
          "while(i<=10)",
          "while i=1 to 10"
        ]
      },
{
        id: 8,
        question: "when an operator's value ios NULL,the typeof returned by the unary operator is:",
        answer: "object",
        options: [
          "boolean",
          "object",
          "integer",
          "undefined"
        ]
      },
{
        id: 9,
        question: "which of the following are closures in javascript?",
        answer: "all the above",
        options: [
          "objects",
          "functions",
          "variables",
          "all the above"
        ]
      },
{
        id: 10,
        question: "what keyword is used declare an asynchronous function in javascript?", 
        answer: "async",
        options: [
          "settimeout",
          "async",
          "sync",
          "await"
        ]
      },
{
      id: 11,
      question: "how do you call afunction named myfunction?",
      answer: "myfunction()",
      options: [
        "myfunction()",
        "call myfunction()",
         "call function myfucntion()",
        "myfunction function()"
      ]
    },
{
      id: 12,
      question: "where is the correct place to insert the javascript?",
      answer: "both body and head section ",
      options: [
        "head section",
        "body section",
        "both bosy and head section",
        "none of these"
      ]
    },
{
      id: 13,
      question: "the external javascript file must contain the script tag?",
      answer: "true",
      options: [
        "false",
        "true",
        "None of the above"
      ]
    },
{
      id: 14,
      question: "How to write an IF statement in javascript?",
      answer: "if(i==5)",
      options: [
        "if(i==5)",
        "if(i==5)then",
        "if i==5 then",
        "if i=5"
      ]
    },
{
      id: 15,
      question: "how to create a function on javascript?",
      answer: "function myfunction()",
      options: [
        "function myfunction()",
        "function =myfunction()" ,
        "function :myfunction()",
        "None of the above"

    ]
    },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}