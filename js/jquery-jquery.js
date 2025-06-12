
let questions = [
{
        id: 1,
        question: "Which of the following is correct?",
        answer: "jquery is a javascript library",
        options: [
          "jquery is a json library",
          "jquery is a javascript library",
          "jquery is a ajax library",
          "None of these"
        ]
      },
{
        id: 2,
        question: "can you pass a anonymous as an argument to another function?",
        answer: "true",
        options: [
          "true",
          "true/false",
          "false",
          "none of these"
        ]
      },
{
        id: 3,
        question: "Is jQuery a library for client scripting or server scripting?",
        answer: "client scripting",
        options: [
          "server scripting",
          "client scripting",
          "both side scripting",
          "it is not both client or server scripting"
        ]
      },
{
        id: 4,
        question: "Is it possible to use jQuery together with AJAX",
        answer: "yes",
        options: [
          "yes",
          "no",
          "true",
          "None of these"
        ]
      },
{
        id: 5,
        question: "The jQuery html() method works for both HTML and XML documents ?",
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
        question: "The jQuery animate() method can be used to animate ANY CSS property?",
        answer: "only properties containing numeric values",
        options: [
          "yes",
          "only properties containing numeric values",
          "all property except the shorthand properties",
          "None of these"
        ]
      },
{
        id: 7,
        question: "which jquery method returns the direct parent element of the selected element?",
        answer: "parent()",
        options: [
          "parent()",
          "ancestors()",
          "ancestor()",
          "parents()"
        ]
      },
{
        id: 8,
        question: "which jquery method should be used to deal with name conflicts?",
        answer: "noconflict()",
        options: [
          "noconflict()",
          "conflict()",
          "nonameconflict()",
          "nameconflict()"
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
        question: "Which jquery method is used to switch between adding/removing one or more classes (for css) from selected elements ?",
        answer: "toggleclass()",
        options: [
          "altclass()",
          "switch()",
          "switchclass()",
          "toggleclass()"
        ]
      },
{
      id: 11,
      question: "which jquery method is used to remove selected elements?",
      answer: "both methods can be used",
      options: [
        "remove()",
        "detach()",
        "both methods can be used",
        "All of the above"
      ]
    },
{
      id: 12,
      question: "which built-in method returns the characters in a string beginning at the specified location",
      answer: "substr()",
      options: [
        "slice()",
        "getsubstr()",
        "substr()",
        "None of the above"
      ]
    },
{
      id: 13,
      question: "which jquery function is used to prevent code from running,before the document is finished loading?",
      answer: "$(document).ready()",
      options: [
        "$(document).ready()",
        "$(document).load()",
        "$(body).onload()",
        "None of the above"
      ]
    },
{
      id: 14,
      question: "which jquery method is used to hide selected elements ?",
      answer: "hide()",
      options: [
        "visible(false)",
        "hide()",
        "display(none)",
        "hidden()"
      ]
    },
{
      id: 15,
      question: "which jquery method is used to set one or more style properties for selected elements?",
      answer: "CSS()",
      options: [
        "HTML()",
        "CSS()" ,
        "STYLE()",
        "None of the above"

    ]
    },
{
      id: 16,
      question: "which method allows you to filter elements based on specified criteria?",
      answer: "filter()",
      options: [
        "get()",
        "find()",
        "search()",
        "filter()"
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
        location.href = "final-jquery.html";
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