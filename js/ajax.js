let questions= [
	{
		id : 1,
		question : "what does ajax stands for?",
		answer: "asynchronous javascript and xml",
		options : [
			"asynchronous javascript and xml", 
			 "asynchronous json and xml", 
			 "asynchronous java and xml", 
			 "asynchronous javascript and xmlHttpRequest"
			]
	},
	{
		id : 2,
		question : "ajax is used for creating____?",
		answer:"wed applications",
		options : [
			 " desktop applications",
			 "web applications", 
			 "system applications",
			 " all the above"
			]
	},
	{
		id : 3,
		question : "what server support ajax?",
		answer:"HTTP",
		options : [
			 "WWW", 
			 "SMTP", 
			 "HTTP",
			 "both a and b"
		]
	},
	{
		id : 4,
		question : "which of the following feature makes the ajax unique?",
		answer:"it makes data requests asynchronously",
		options : [
			 "it makes data requests asynchronously", 
			 "it is a server-side application can also be used to create servers",
			"both a and b",
			"none of these"
			]
	},
	{
		id : 5,
		question : "ajax sends data to web server____",
		answer:"in the background",
		options : [
			"in the background", 
			 "before loading the page",
			 "with reloading the page",
			 "all the above",
		]
	},
	{
		id : 6,
		question : "ajax updates a web page ____ reloading the page",
		answer:"without",
		options : [
			 "with", 
			 "without",
			 "a is correct",
			 "b is correct"
			]
	},
	{
		id : 7,
		question : "How many types of triggers are present in update panel?",
		answer:"two",
		options : [
			 "one", 
			 "three",
			 "two",
			 "four"
			]
	},
	{
		id : 8,
		question :"GET is simpler and faster than POST.is this true?",
		answer:"yes",
		options : [
			     "no", 
				"yes",
				"none of these"
			]
	},
	{
		id : 9,
		question : "what are the advantages of ajax?",
		answer:"All of the above.",
		options : [
			 "Bandwidth utilization", 
			 "more interactive",
			 "speeder retrieval of data",
			 "All of the above."
			]
	},
	{
		id : 10,
		question : "ajax is about updating ____ without reloading the full-page?",
		answer:"parts of a web page",
		options : [
			 "parts of a web page", 
			 "parts of a database records",
			 "parts of a HTML tags dynamically",
			 "parts of a CSS classes dynamically",
			]
	},
	{
		id : 11,
		question : "which technologies give ajax its name?",
		answer:"asynchronous javascript and XML",
		options: [
			 "Net and XML", 
			 "ASP and XML",
			 "asynchronous javascript and XML",
			 "none of these"
			]
	},
	{
		id : 12,
		question : "which company made ajax popular?",
		answer:"Google",
		options : [
			"Oracle", 
			 "Google",
			 "Microsoft",
			 "Facebook"
		]
	},
	{
		id : 13,
		question : "ajax technologies include_____.",
		answer:"all the above",
		options : [
			 "HTML/XHTML and CSS", 
			 "DOM",
			 "javascript",
 			 "all the above"
			]
	},
	{
		id : 14,
		question : "which formats are supported by ajax to send and receive information?",
		answer:"JSON,XML,HTML and textFiles",
		options : [
			 "JSON,XML,HTML,SQL,MYSQL AND textFiles", 
			 "JSON,XML,HTML and textFiles",
			 "JAVA,JSON,Oracle",
			 "none of these"
			]
	},
	{
		id : 15,
		question : "which are the triggers present in update panel?",
		answer:"PostBackTrigger and AsyncPostBackTrigger",
		options : [
			"PostTrigger and AsyncPostTrigger", 
			 "PostBackTrigger and AsyncPostBackTrigger",
			 "syncPostBackTrigger and AsyncPostBackTrigger ",
			 "all the above"
		
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
        location.href = "final-ajax.html";
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