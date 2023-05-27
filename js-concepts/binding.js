/**
 * In Js we have two types of Binding
 * 1. Implicit 2. Explicit
 * call, apply, bind
 * Pollyfil for call, apply, bind
 */

//Calling a function of object using '.' is Implicit Binding
var user = {
    name: "Username",
    getName: function () {
        // console.log(this.name);
    }
}

user.getName() //implicit binding

//Explicit Binding: 
//Binding a standalone function to a object, and calling it as it belonged to the object.
//this can be achieved using: call, apply, bind

function appendLastName(lastName) {
    this.name += lastName;   //this is pointing to window object here
}

//after call, bind, apply 'this' of function will point to object, as if the function was part of the object
appendLastName.call(user, "call");
user.getName();

appendLastName.apply(user, ['apply'])  //same as call, just all arguments will be passed in an array
user.getName();

let bindfunc = appendLastName.bind(user);
bindfunc('bind');
user.getName();


//ex: find output
var status = "one";

setTimeout(() => {
    var status = "two";

    const data = {
        status: 'three',
        getStatus() {
            // console.log(this.status);
        }
    }

    data.getStatus();
    data.getStatus.call(this);
}, 1000);

//ex: Call printAnimals such that it prints all animals in object
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
]

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + " : " + this.name);
    }

    this.print();
}

animals.forEach((item, index) => {
    printAnimals.call(item, index);
})

//ex: append an array to another array
//we can use concat, forloop also
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

arr1.push.apply(arr1, arr2);
// console.log(arr1);

//ex: find min/max of array
arr1 = [2, 5, 6, 7, 1, 11, 14];
let min = Math.min.apply(null, arr1);
let max = Math.max.apply(null, arr1);
// console.log(min, max);


//ex: bound functon
function f() {
    // console.log(this);
}

var user = {
    g: f.bind(null)
}

user.g(); //points to window not user, as passing null context in bind, hardsets the context of function 'f'

//ex: fix the code to work
function checkPassword(success, failed) {
    let password = prompt('Enter Password');
    if (password == 'correct') { success() }
    else { failed() }
}

var user = {
    name: 'Prashant',
    loginSuccessful() {
        let msg = `${this.name} login success!`;
        // console.log(msg);
    },
    loginFailed() {
        let msg = `${this.name} login failed!`
        // console.log(msg);
    },
}

// checkPassword(user.loginSuccessful, user.loginFailed); //here success and fail are not binding to user object thus this.name will point to window object
//solution
// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))


//ex: call the method checkpassword properly to handling user login
function checkPassword(ok, fail) {
    let pass = prompt('Enter Password')
    if (pass == 'correct') ok()
    else fail();
}

var user = {
    name: 'Prashant',
    login(res) {
        let msg = `${this.name} login ` + (res ? 'success' : 'failed');
        console.log(msg);
    }
}
//solution
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));


//ex: explicit binding with arrow function
const age = 20;  //hint: let and const do not belong to window object, var does!
var user = {
    age : 10,
    getAge(){
        // console.log(this.age);
    },
    getAgeArrow: () => {
        // console.log(this.age);
    }
}
var user2 = {
    age : 40,
}
user.getAge.call(user2); 
user.getAgeArrow.call(user2); 

//Pollyfil for call
Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this != 'function'){
        throw new Error('This is not callable');
    }

    context.fn = this;
    context.fn(...args);
}

var user = {
    name : 'username',
}

function func(age, msg = 'No msg!'){
    let nameage = `Name: ${this.name}, Age: ${age}, Message: ${msg}`
    console.log(nameage);
}

func.myCall(user, 10)


//Pollyfil for apply
Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this != 'function'){
        throw new Error('This is not callable');
    }

    if(!Array.isArray(args)){
        throw new Error('Arguments should be passed in an array!');
    }

    context.fn = this;
    context.fn(...args);
}

func.myApply(user, [20, 'hello']);

//Pollyfil for bind
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this != 'function'){
        throw new Error('This is not callable');
    }

    context.fn = this;
    return function(...nextArgs){
        return context.fn(...args, ...nextArgs);
    }
}

let newfunc = func.myBind(user);  //we can pass arguments here as well
newfunc(30, 'Hello user!')