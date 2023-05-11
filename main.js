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
const script = document.createElement('script');
script.src = "variables.js";
document.head.appendChild(script);


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

