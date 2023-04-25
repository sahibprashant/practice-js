//to learn in JS
//variables : var,let,const
//string methods, array methods
//objects, json, dom manipulation
//functions, arrow funntions
//callback funcitons, promise, async/await
//ES6, fetch

console.log("JS Attached!");

function log(val) {
    console.log(val);
}

//varialbles: var, let, const
//Scope of variables in js: Global, Local/Functional
var x = 10;  //value can be changed, and have Global Scope
var x = 12;  //can be redecleared
// log(x);

// x = 15;
// log(x);

function printX() {
    //x has global scope thus availabe here
    log(x);
    //global value will be changed
    x = 10;
}

printX();
log(x)

//let and const have block scope: block is, code within {}
//it is better to use 'let' always instead of 'var' as it has block scope, low chances of conflict
let y = 10; //will throw error, variables can not be redecleared with let, const
y = 20;

function printY() {
    // log(y); //y of main file will accessed here if not again decleared in the block scope! otherwise it will throw error.
    let y = 16; //can redecleare y as new block scope is there
    log(y);

    //local variables
    let m = 10;
    var n = 20; //will not be available at window level

    log("n: " + window.n); //n: undefined
}

printY();
log(y); //will print y = 20 of main scope.

//follow block scope same as let, value cannot be changed/reassigned as it is const
const z = 10;
const q = z;

const ar = [1, 4, 7];
// ar = [2, 4, ,5] //will throw errow

ar.push(20); //will work
ar.pop(); //will work
//same in objects 


//button
const btn = document.getElementById('btn');
btn.innerHTML = "Hello Button";
btn.addEventListener('click', function () {
    console.log('Clicked!')
})
btn.addEventListener('click', function () {
    let val = confirm('Clicked!')
    if (val) {
        console.log(val)
    }
})
btn.onclick = () => alert('Clicked!')
btn.onmouseover = () => {
    btn.innerHTML = "MouseOver"
}
btn.onmouseleave = () => {
    btn.innerHTML = "Hello Button"
}

function myfunction() {

}

btn.addEventListener('click', myfunction);
btn.removeEventListener('click', myfunction);


//string template 
const val = true;
let str = `this is a string template ${val}`;

//array 
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [23, 324, 2, 4, 1];
arr1.sort(function (a, b) { return a - b; });

const finalArr = arr1.concat(arr2);

const callBackFun = (val, index, arr) => {
    console.log(val, index)
}

arr1.forEach(callBackFun);


window.localStorage.setItem('name', 'User');
window.localStorage.getItem('name');
window.localStorage.clear();

const str1 = "Prashant";
str1.includes('ras');
str1.split('a')


//callback function
//A callback is a function passed as an argument to another function.
const myCallback = (sum) => {
    log('callback called: ' + sum);
}

const func = (a, b, callbackfunc) => {
    return callbackfunc(a+b);
}

func(5, 10, myCallback);

//Promise
const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('Hello World')}, 2000);
})

promise.then((resResp)=>{
    //handle resolve
    log(resResp);
    },(errorResp)=>{
    //handle reject
    log(errorResp);
})


//fetch request using callback funciton 
function printResponse(resp){
    console.log(resp);
}

const requestData = (printResponse) => {
    fetch('URL').then((response) => {
        const respObj = JSON.parse(response);
        if(respObj.status == 200){
            printResponse('SUCCESS');
        }else{
            printResponse('ERROR');
        }
    })
}

// requestData(printResponse);

//fetch request using promise
const requestPromise = new Promise((resolve, reject) => {
    fetch('URL').then((resp) => {
        const respObj = JSON.parse(resp);
        if(respObj.status == 200){
            resolve('success');
        }else{
            reject('error');
        }
    })
})

//requestPromise.then((resp) => {
//    log(resp) //success
//}, (err) => {
//    log(err) //error
//});



//async/await
//async : makes a function return a promise
//await : makes a function to wait for a promise
//await can only be used inside a async function, it pauses a function and wait till the response comes.
async function myfunc(){
    return 'hello';
}
//this is same as 
//function myfunc(){return Promise.resolve('hello')};

//thus we can do
myfunc().then((resp)=>{
    //success
},(err) => {
    //error
})


async function asycFun(){
    let resp = await fetch('URL'); //execution will pause until fetch delivers the response
    let obj = await JSON.parse(resp); //later we can do anything with the response
}


async function printDelay(){
    let printPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello!!');
        }, 2000);
    })

    let printVal = await printPromise;

    log('printDelay : ' + printVal);
}

printDelay();


//add js external script 
// let script = document.createElement('script');
// script.src = 'main.js';
// document.head.appendChild(script); 