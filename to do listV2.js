<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO LİST V2</title>
    <style type="text/css">

 body {
	background: #04A1BF;
	text-align: center;
	font-family: 'Open Sans', sans-serif;
}

.intro {
	margin: 30px 0px;
	font-weight: bold;
}

h1 {
	color: #ffffff;
	text-transform: uppercase;
	font-weight: 800;
}

p {
	font-weight: 600;
}

#first {
	margin-top: 10px;
	color: #FFCD5D;
}

#second {
	color: #51DF70;

}

#third {
	color: #025F70;
	margin-bottom: 30px;
}


#enter {
	border: none;
	padding: 5px 15px;
	border-radius: 5px;
	color: #04A1BF;
	background-color: #025F70;
	transition: all 0.75s ease;
	-webkit-transition: all 0.75s ease;
	-moz-transition: all 0.75s ease;
	-ms-transition: all 0.75s ease;
	-o-transition: all 0.75 ease;
	font-weight: normal;
}

#enter:hover{
	background-color: #02798F;
	color: #FFCD5D;
}

ul {
	text-align: left;
	margin-top: 20px;
}


li {
	list-style: none;
	padding: 10px 20px;
	color: #ffffff;
	text-transform: capitalize;
	font-weight: 600;
	border: 2px solid #025f70;
	border-radius: 5px;
	margin-bottom: 10px;
	background: #4EB9CD;
	transition: all 0.75s ease;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
	-o-transition: all 0.5 ease;
}

li:hover {
	background: #76CFE0;
}

li > button {
	font-weight: normal;
	background: none;
	border: none;
	float: right;
	color: #025f70;
	font-weight: 800;
}

input {
	border-radius: 5px;
	min-width: 65%;
	padding: 5px;
	border: none;
}


.done {
	background: #51DF70 !important;
	color: #00891E;
}

.delete {
	display: none;
}   
    </style>
</head>
<body>
    <body>
        <div class="container">
            <div class="row">
                <div class="intro col-12">
                    <h1>Work To-Dos</h1>
                    <div>
                        <div class="border1"></div>
                              
                </div>
            </div>
    
            <div class="row">
                <div class="helpText col-12">
                    <p id="first">Enter text into the input field to add items to your list.</p>
                    <p id="second">Click the item to mark it as complete.</p>
                    <p id="third">Click the "X" to remove the item from your list.</p>
                </div>
            </div>
    
            <div class="row">
                <div class="col-12">
                    <input id="userInput" type="text" placeholder="New item..." maxlength="27">
                    <button id="enter"><i class="fas fa-pencil-alt"></i></button>
                </div>
            </div>
    
            <!-- Empty List -->
            <div class="row">
                <div class="listItems col-12">
                    <ul class="col-12 offset-0 col-sm-8 offset-sm-2">
                    </ul>
                </div>
            </div>
    
        </div>
	<script type="text/javascript" src="todo listv2.js"></script>
</body>
</html>

//JS
var enterButton = document.getElementById('enter')
var input = document.getElementById('userInput')
var ul = document.querySelector('ul')
var item = document.getElementsByTagName('li')

function inputLength(){
    return input.value.length;
}


function listLength(){
    return item.length
}

function createListElement(){
    var li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    function crossOut(){
        li.classList.toggle("done")
    }



    li.addEventListener('click',crossOut)

    var dBtn = document.createElement('button')

    dBtn.appendChild(document.createTextNode('X'))

    li.appendChild(dBtn)

    li.addEventListener('click',deleteListItem)

    function deleteListItem (){
        li.classList.add('delete')
    }
}


function addListAfterClick(){
  if(inputLength() > 0){
  createListElement()
  }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement()
    }
}

enterButton.addEventListener('click',addListAfterClick)
input.addEventListener('keypress',addListAfterKeypress)


