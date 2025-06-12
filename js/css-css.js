let questions= [
	{
		id : 1,
		question : "what does CSS stands for?",
		answer: "cascading style sheets",
		options : [
			"computer style sheets", 
			 "creative style sheets", 
			 "colorful style sheets", 
			 "cascading style sheets"
			]
	},
	{
		id : 2,
		question : "how do you add a background color for all <h1> element?",
		answer:"h1.{background-color:#FFFFFF}",
		options : [
			 "h1.{background-color:#FFFFFF}",
			 "all.h1{background-color:#FFFFFF}", 
			 "h1.all{background-color:#FFFFFF}",
			 "none of these"
			]
	},
	{
		id : 3,
		question : "which property is used to change the font of an element?",
		answer:"font-family",
		options : [
			 "font-style", 
			 "font-family", 
			 "font-height",
			 "font-weight"
		]
	},
	{
		id : 4,
		question : "How do you make the text bold?",
		answer:"font-weight:bold;",
		options : [
			 "style:bold;", 
			 "font:bold;",
			"font-weight:bold;",
			"none of these"
			]
	},
	{
		id : 5,
		question : "how do you group selectors?",
		answer:"separate each selector with a comma",
		options : [
			"separate each selector with a space", 
			 "separate each selector with plus sign",
			 "separate each selector with semicolon",
			 "separate each selector with a comma"
		]
	},
	{
		id : 6,
		question : "Which of the following property is used to set the following of an image border",
		answer:"border",
		options : [
			 "height", 
			 "width",
			 "border",
			 "--moz-opacity"
			]
	},
	{
		id : 7,
		question : "when using the padding property are you allowed to use negative values?",
		answer:"no",
		options : [
			 "yes", 
			 "no",
			 "true",
			 "none of these"
			]
	},
	{
		id : 8,
		question :"which property is used to change the left margin of an element?",
		answer:"margin-left",
		options : [
			     "margin-left", 
				"margin-right",
				"margin-top",
				"margin-bottom"
			]
	},
	{
		id : 9,
		question : "what is the default value of the position property?",
		answer:"static",
		options : [
			 "relative", 
			 "static",
			 "absolute",
			 "fixed"
			]
	},
	{
		id : 10,
		question : "how do you select an element with ID 'demo'?",
		answer:"#demo",
		options : [
			 "*demo", 
			 "demo",
			 "#demo",
			 ".demo",
			]
	},
	{
		id : 11,
		question : "how do you select elements with class  name 'test'?",
		answer:".test",
		options: [
			 "#test", 
			 "*test",
			 "test",
			 ".test"
			]
	},
	{
		id : 12,
		question : "How do you select all P element inside a div element?",
		answer:"div p",
		options : [
			"div p", 
			 "div.p",
			 "div+p",
			 "none of these"
		]
	},
	{
		id : 13,
		question : "An iframe is used to display a web page  within a web page ",
		answer:"true",
		options : [
			 "true", 
			 "false",
			 "there is no such thing as an iframe",
 			 "none of these"
			]
	},
	{
		id : 14,
		question : "which CSS property is used to change the text color of an element?",
		answer:"color",
		options : [
			 "text-color", 
			 "fgcolor",
			 "bgcolor",
			 "color"
			]
	},
	{
		id : 15,
		question : "Which HTML attribute is used to define inline style?",
		answer:"style",
		options : [
			"styles", 
			 "font",
			 "class",
			 "style"
		
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
        location.href = "final-css.html";
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