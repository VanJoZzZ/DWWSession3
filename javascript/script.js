console.log("Hello World!");

//we target the html button element with the id of button-name
//html elements related to the text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");
//html elements related to the color
let inputColor = document.querySelector("#input-color");
let buttonColor = document.querySelector("#button-color");
//html element related to the target
let target = document.querySelector("#target");


console.log(button);


//we listen for a click on the button
button.addEventListener("click", function() {
//and we do stuff
console.log(inputName.value);
//we replace the content of the target
//with the one from the input
target.innerHTML = inputName.value;})

//we listen for a click on the buttonColor
buttonColor.addEventListener("click", function() {
    //we get the color value
    //we update the color
    target.style.color = inputColor.value;
})


/*
##################################################################

                 To Do List

##################################################################
*/
//1 - create the link to the html
let buttonToDo = document.querySelector("#toDoButton");
let inputToDo = document.querySelector("#toDoInput");
let toDo = document.querySelector("#toDo");

//2 - listen to the click on the button
buttonToDo.addEventListener("click", function(){
     //3 - we get the input value
     let currentToDo = inputToDo.value;

     //4 - we create a list element
     //we use the backticks(`) to create a litteral template
     //within a litteral template we can mix html and js
     let newLiElement =`<li>${currentToDo}</li>`;

     //5 - we add it inside the ul element
     toDo.innerHTML += newLiElement;





})