
let questions = [
{
        id: 1,
        question: "What does PHP stand for?",
        answer: "Hypertext PreProcessor",
        options: [
          "Private Home Page",
          "Hypertext PreProcessor",
          "Personal Hypertext Processor",
          "None of these"
        ]
      },
{
        id: 2,
        question: "All variables in PHP start with which symbol ?",
        answer: "$",
        options: [
          "&",
          "@",
          "!",
          "$"
        ]
      },
{
        id: 3,
        question: "What is the correct  way end a PHP statement ?",
        answer: ";",
        options: [
          "Newline",
          ",",
          ".",
          ";"
        ]
      },
{
        id: 4,
        question: "The PHP syntax is most similar to :",
        answer: "Perl and c",
        options: [
          "VBscript",
          "JavaScript",
          "Perl and c",
          "None of these"
        ]
      },
{
        id: 5,
        question: "When using the POST method, variables are displaced in the URL ?",
        answer: "False",
        options: [
          "False",
          "True" ,
          "True&False",
          "False&True"
 
      ]
      },
{
        id: 6,
        question: "What is the correct way to create a function in PHP ?",
        answer: "function myFunction()",
        options: [
          "function myFunction()",
          "new_function nyFunction()",
          "create myFunction",
          "None of these"
        ]
      },
{
        id: 7,
        question: "Which superglobal variable holds information about headers, paths, and script locations ?",
        answer: "$_SERVER",
        options: [
          "$_GET",
          "$_GLOBALS",
          "$_SESSION",
          "$_SERVER"
        ]
      },
{
        id: 8,
        question: "Which operator is used to check if two values are equal and of same data type ?",
        answer: "===",
        options: [
          "==",
          "===",
          "=",
          "!="
        ]
      },
{
        id: 9,
        question: "In PHP, hte only way to output text is with echo ?",
        answer: "False",
        options: [
          "False",
          "True",
          "True&False",
          "False&True"
        ]
      },
{
        id: 10,
        question: "What is a correct way to add a comment in PHP ?",
        answer: "/*...*/",
        options: [
          "<!--...-->",
          "*/.../*",
          "<comment>...</comment>",
          "/*...*/"
        ]
      },
{
      id: 11,
      question: "Which of the following is correct about variable naming rules ?",
      answer: "All of the above",
      options: [
        "A variable name can consist of numbers, letters, underscores",
        "you cannot use characters like +,-,%,(,).&,etc in a variable name ",
        "Variable names must begin with a letter or underscore character",
        "All of the above"
      ]
    },
{
      id: 12,
      question: "Which of the following keyword terminates the for loop or switch statement and transfers execution to the statement immediately following the for loop or switch?",
      answer: "break",
      options: [
        "continue",
        "break",
        "switch",
        "None of the above"
      ]
    },
{
      id: 13,
      question: " Which of the following variable is used to generate random numbers using PHP?",
      answer: "rand()",
      options: [
        "random()",
        "srand()",
        "rand()",
        "None of the above"
      ]
    },
{
      id: 14,
      question: "which of the following is used to create a session ?",
      answer: "session_start()function",
      options: [
        "session_start()function",
        "isset()function",
        "session_destroy()function",
        "$_SESSION[]"
      ]
    },
{
      id: 15,
      question: "which of the following method can be used to parse an XML document using PHP ?",
      answer: "Both of the above",
      options: [
        "simplexml_load_string()",
        "loadxml()" ,
        "Both of the above",
        "None of the above"

    ]
    },
{
      id: 16,
      question: "PHP can be run on Microsoft Windows IIS(Internet Information Server) ?",
      answer: "True",
      options: [
        "False",
        "True",
        "True&False",
        "False&True"
      ]
    },
{
      id: 17,
      question: "Which one pf these variable has an illegal name ?",
      answer: "$my-Var",
      options: [
        "$_myVar",
        "$myVar",
        "$my-Var",
        "$my_var"
      ]
    },
{
      id: 18,
      question: "The if statement is used to execute some code only if a specified condition is true ?",
      answer: "True",
      options: [
        "True",
        "False",
        "True&False",
        "False&True"
      ]
    },
{
      id: 19,
      question: "How do you get information from a form that is submitted using the GET method ?",
      answer: "False",
      options: [
        "$_GET[]",
        "Request.Form",
        "Request.Querystring",
        "None of the above"
      ]
    },
{
      id: 20,
      question: "The die() and exit() do the exact same thing ?",
      answer: "True",
      options: [
        "True",
        "False",
        "True&False",
        "False&True"
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