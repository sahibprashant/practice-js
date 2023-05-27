document.querySelector('.eventpropogation_task').style.display = "block";

//if we have nested elements then events on a child element will also trigger the event for its parent
//this is called Event Propogation

//Events propogates from bottom(child) to top(parent) manner by default
//and this is called Event Bubbling

//When events propogates from top to bottom then it is Event Capturing

//Event Propogation happens in this manner
//Capturing->target->Bubbling

//in order to perform Event Capturing pass {capture:true} in addEventListner
//to stop propogation after an event we can pass e.stoppropogation()

const div = document.querySelector('.ep_div');
const form = document.querySelector('.ep_form');
const button = document.querySelector('.ep_button');

//ex: bubbling:  
// div.addEventListener('click', function () {
//     console.log("div");
// });

// form.addEventListener('click', function () {
//     console.log("form");
// });

// button.addEventListener('click', function () {
//     console.log("button");
// });

//ex: captureing
// div.addEventListener('click', function () {
//     console.log("div");
// }, {
//     capture : true,
// });

// form.addEventListener('click', function () {
//     console.log("form");
// }, {
//     capture: true
// });

// button.addEventListener('click', function () {
//     console.log("button");
// }, {
//     capture : true,
// });


//ex: perform capturing for form and bubbling for div and button
// div.addEventListener('click', function () {
//     console.log("div");
// });

// form.addEventListener('click', function () {
//     console.log("form");
// },{
//     capture: true,
// });

// button.addEventListener('click', function () {
//     console.log("button");
// });

//ex: stop event propogation after form
div.addEventListener('click', function (e) {
    console.log("div", e.target, e.currentTarget);   //will get called only if click on div
});

form.addEventListener('click', function (e) {
    e.stopPropagation();  //button and form will do bubbling after that div will not get called
    console.log("form", e.target, e.currentTarget);
});

button.addEventListener('click', function (e) {
    console.log("button", e.target, e.currentTarget);
});


//event.target vs event.currentTarget vs this.target
//event.target is always fixed even if event propogation happens. Gives us the element on which action performed.
//event.currentTarget changes with event propogation happens, and points to current element
//this.target targets the element as per 'this' keyword


//ex: create a modal and close it only when user click outside of the modal
const modalButton = document.querySelector('.modal_btn');
const modal = document.querySelector('.modalBackground');
let toggle = false;

modalButton.addEventListener('click', function () {
    toggle = true;
    modal.style.display = "flex";
})

modal.addEventListener('click', function (e) {
    if (e.target.className === "modalBackground") {
        toggle = false;
        modal.style.display = "none"
    }
})