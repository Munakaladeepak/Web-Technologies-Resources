
let questions = [
{
        id: 1,
        question: "What does HTML stands for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Home tool Markup language",
          "hyper tool Markup language",
         "Hyper text machine language",
          "Hyper Text Markup Language"
        ]
      },
{
        id: 2,
        question: "choose the correct HTML element forthe largest heading?",
        answer: "h1 tag",
        options: [
          "h5 tag",
          "h6 tag",
          "h1 tag",
          "h2 tag"
        ]
      },
{
        id: 3,
        question: "which character is used to indicate an end tag?",
        answer: "/",
        options: [
          "%",
          "/",
          "$",
          "#"
        ]
      },
{
        id: 4,
        question: "choose the correct HTML tag for paragraph?",
        answer: "p tag",
        options: [
          "p tag",
          "paragraph tag",
          "body tag",
          "head tag"
        ]
      },
{
        id: 5,
        question: "which of these elements are all table tag elements?",
        answer: "table,thead,tbody",
        options: [
          "table,tbody,body",
          "tbody,td,foot" ,
          "table,head,body",
          "table,thead,tbody"
 
      ]
      },
{
        id: 6,
        question: "How can you make a numbered list?",
        answer: "ol(orderlist) tag",
        options: [
          "li(listitem) tag",
          "list tag",
          "ol(orderlist) tag",
          "ul(unorderlist)tag"
        ]
      },
{
        id: 7,
        question: "who is making the web standards?",
        answer: "the world wide web consortium",
        options: [
          "the world wide web consortium",
          "mozilla",
          "google",
          "microsoft"
        ]
      },
{
        id: 8,
        question: "In HTML,you can embed SVG elements directly into an HTML page",
        answer: "true",
        options: [
          "true",
          "false",
          "undefined",
          "undefined"
        ]
      },
{
        id: 9,
        question: "which document is correct for HTML5?",
        answer: "!DOCTYPE html tag",
        options: [
          "!DOCTYPE html tag",
          "!DOCTYPE HTML5 PUBLIC tag",
          "!DOCTYPE HTML5 tag",
          "!DOCTYPE PUBLIC5 TAG"
        ]
      },
{
        id: 10,
        question: "which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answer: "alt",
        options: [
          "alt",
          "src",
          "title",
          "longdesc"
        ]
      },
{
      id: 11,
      question: "which HTML element defines the title of a document?",
      answer: "title tag",
      options: [
        "title tag",
        "head tag",
        "body tag",
        "meta tag"
      ]
    },
{
      id: 12,
      question: "Graphics defined by SVG is in shich format?",
      answer: "XML",
      options: [
        "CSS",
        "HTML",
        "XML",
        "JS"
      ]
    },
{
      id: 13,
      question: "choose the correct HTML element to define emphasized text?",
      answer: "em tag",
      options: [
        "i tag",
        "b tag",
        "em tag",
        "None of the above"
      ]
    },
{
      id: 14,
      question: "What is the correct HTML element for inserting a line break ?",
      answer: "br tag",
      options: [
        "ib tag",
        "br tag",
        "break tag",
        "None of the above"
      ]
    },
{
      id: 15,
      question: "Choose the correct HTML element to define important text ?",
      answer: "strong tag",
      options: [
        "b tag",
        "i tag",
        "strong tag",
        "None of the above"
      ]
    },
{
      id: 16,
      question: "An iframe is used to display a web page within a web page ?",
      answer: "True",
      options: [
        "True",
        "False",
        "There is no such thing as an iframe",
        "None of the above"
      ]
    },
{
      id: 17,
      question: "Which input type defines a slider control ?",
      answer: "range",
      options: [
        "search",
        "range",
        "controls",
        "slider"
      ]
    },
{
      id: 18,
      question: "In HTML, onblur and onfocus are?",
      answer: "Event attributes",
      options: [
        "HTML elements",
        "Style attributes",
        "Event attributes",
        "None of the above"
      ]
    },
{
      id: 19,
      question: "HTML commments start with <!-- and end with -->?",
      answer: "True",
      options: [
        "False",
        "True",
        "Flase&True",
        "True&False"
      ]
    },
{
      id: 20,
      question: "Block elements are normally displayed without starting a new line?",
      answer: "False",
      options: [
        "False",
        "True",
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
        location.href = "final-html.html";
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