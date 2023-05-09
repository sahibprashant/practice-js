/* Scope, Varialbes, Vairables Shadowing & Hoisting */
//Scope : Regine of Program where a variable can be recognised
//Global, Local/function and Block Scopes are available

//global scope
var a = 10;
let b = 10;
const c = 10;

function abc() {
    //function scope or local scope
    var d = 10;
    let e = 10;
}

{
    //block scope
    const f = 20;
}

console.log(a); //10

//will throw error, we can access varialbes of big scope in small scope but not vica versa.
// console.log(f);

//let and const came in ES6
//var can be redecleared
var a = 20; //works well;

//let and const cant be redecleared in same scope
// let b = 20; //will give error

//const should be initialised at the time of declaration
const g = 20;

//Shadowing means redeclaring the varialbe in different scope again,
//this will not change the value of varialbe of bigscope 
{
    let b = 20;
    console.log(b); //20 from block scope, this is shadowing
}
console.log(b); //10 from global scope

//# Hositing
console.log(num); //undefined
var num = 10; 

//but in case of let and const we will get error 
//as they went in Temperorly Dead Zone
// console.log(num2); //error
// let num2= 10; //as this is let

function fn(){
    console.log(num3); //undefined
    var num3 = 20;
}
fn();

function fn2(){
    // console.log(a,b,c); //will throw error as b is in Temperorly Dead Zone (in hoisting)
    var a = 10;
    let b  = 20;
    const c = 30;
}
fn2();

//function in JS are hoisted completely and are executed in a seperate Javascript Execution Context