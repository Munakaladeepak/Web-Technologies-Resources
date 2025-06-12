
let questions = [
{
        id: 1,
        question: "XML stands for______?",
        answer: "extensible markup language",
        options: [
          "extensible margin language",
          "xtensible markup language",
          "extensible markup language",
          "None of these"
        ]
      },
{
        id: 2,
        question: "XML is designed to___and___data?",
        answer: "store,transport",
        options: [
          "design,style",
          "design,send",
          "store,transport",
          "store,style"
        ]
      },
{
        id: 3,
        question: "XML schema,published as a W3C recommendation in_____?",
        answer: "may 2001",
        options: [
          "may 2000",
          "may 2001",
          "may 2002",
          "may 2004"
        ]
      },
{
        id: 4,
        question: "An XML document is a string of______",
        answer: "characters",
        options: [
          "XML codes",
          "ASCII codes",
          "HTML character codes",
          "characters"
        ]
      },
{
        id: 5,
        question: "how many types of tags are there in an XML document ?",
        answer: "3",
        options: [
          "4",
          "2" ,
          "7",
          "3"
 
      ]
      },
{
        id: 6,
        question: "XML tags are case-sensitive ?",
        answer: "yes",
        options: [
          "yes",
          "no",
          "sometimes",
          "is not"
        ]
      },
{
        id: 7,
        question: "with respect to xml,sgml stands for_____?",
        answer: "standard Generalized Markup Language",
        options: [
          "standard Generalized Markup Language",
          "standard general markup langauage",
          "strainer generalized markup language",
          "standard global markup language"
        ]
      },
{
        id: 8,
        question: "In XML,DTD stands for_____?",
        answer: "document type definition",
        options: [
          "document type declaration",
          "data type definition",
          "document to declaration",
          "document type definition"
        ]
      },
{
        id: 9,
        question: "In an XML document,the comments are written within_____?",
        answer: "<!--and-->",
        options: [
          "<!--and-->",
          "/* and */",
          "<# and >",
          "@ and @"
        ]
      },
{
        id: 10,
        question: "SAX in XML is used for_____?",
        answer: "parsing xml documents ",
        options: [
          "validating the xml file",
          "parsing xml documents",
          "defining format of an xml document",
          "none of these"
        ]
      },
{
      id: 11,
      question: "Does SAX parser create any internal structure?",
      answer: "no",
      options: [
        "yes",
        "no ",
        "some times",
        "none of these"
      ]
    },
{
      id: 12,
      question: "In XML DOM,what does DOM stands for_____?",
      answer: "document object model",
      options: [
        "date object model",
        "document oriented model",
        "document object model",
        "document open model"
      ]
    },
{
      id: 13,
      question: "what does SAX stands for______?",
      answer: "simple API and XML",
      options: [
        "safe API for XML",
        "simple API for XML",
        "super application for XML",
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