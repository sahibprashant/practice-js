/**
 * Practice JavaScript
 * Scope, Variables(var,let,const) 
 * JS execution proccess & hoisting
 * String methods, array methods
 * Objects, JSON, Dom Manipulation
 * Functions, Arrow Funntions,
 * Closures, Currying, this keyword,
 * Callback Funcitons, Promise, async/await, fetch
 * Explicit function Binding (call, apply, bind),
 * Debouncing & Throttling
 * Event Propogation 
*/

/**
 * Change the file name in srcipt.src to apply other scripts!
 * uncomment the console.logs in scripts to print outputs 
*/

// const script = document.createElement('script');
// script.src = "./concepts/eventpropagation.js";
// document.head.appendChild(script);
const game = document.querySelector('.jsprojects');
game.addEventListener('click', (e) => {
    let target = e.target.id;
    switch (target) {
        case "memory-game":
            window.location.href = "/memory-game/index.html"
            break;
        default:
            break;
    }
});


/* Basics: */
//JS is developed by Netscape

//JavaScript uses an interpreter to execute,
//which makes it an interpreted language,
//but the interpreter executes the program's instruction by instruction;
//this makes the overall execution slow

//Data Types of JavaScript
//Primitive Types: 1. Number 2.String 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt
//Non-Primitive Type: Objects

//Javascript Execution:
//Happens in two stages: 1. Creation Phase 2.Execution Phase
//1. During creation Hoisting happens, JS creates a heap of memory
//and decleare all the varibles functions at the top.
//variables with var are initialised with undefined(accessable throw window object)
//let and const are defined in Temperorly Dead Zone(not accessable throw window object)
//function refrences are stored in heap, but for execution of functions JS creates a seperate
//execution context for functions

//y=10;
//when we do not declare a variable and assigned a value to it then it belong to window object,
//no matter in which scope it is created
//'use strict' enables strcit mode: helps in avoiding lot of code related error which are not considered as error before
//undecleared variables throw error in this mode.
//delete keyword on variables will throw error, as it only use to delete keys of object
//duplicate parameters names in function is not allowed
//In strict mode, a function declaration inside a block is only visible inside the block
//makes javascript more secure and removes changes of code errors well.


//When we try to invoke something that is not a function, a TypeError is thrown.

//The delete operator returns a boolean value: true on a successful deletion, else it'll return false.
//However, variables declared with the var, const or let keyword cannot be deleted using the delete operator.


//With the import keyword, all imported modules are pre-parsed.
//This means that the imported modules get run first, the code in the file which imports the module gets executed after.