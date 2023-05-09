/*
Closure & Currying 
*/

function abc(a) {
    function def(b) {
        return a + b;
    }
    return def;
}

const a = abc(10)(20);
// console.log(a);

//helps in reducing time-complexity 
function find() {
    let res = [];
    for (let i = 0; i < 10000000; i++) {
        res[i] = i;
    }
    return function (index) {
        return res[index]
    }
}
const val = find();
val(10);
val(20);

//create a private counter
function calc() {
    let _counter = 0;
    function add(val) {
        _counter += val;
    }
    function print() {
        // console.log(_counter);
    }

    return { add, print };
}
const count = calc();
count.add(10);
count.add(20);
count.print();


//make a block of code run only once
function onlyOnce() {
    let called = 0;
    return function () {
        if (called == 0) {
            // console.log('Code Execution completed!!');
            called++;
        } else {
            // console.log('Already Executed!')
        }
    }
}

const runCode = onlyOnce();
runCode();
runCode();

//Currying: When number of passed arguments are equal to number of nested functions

//ex: write sum(2)(6)(1);
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
var total = sum(2)(6)(1);

//ex: curry calculator
function evaluate(type) {
    return function (a) {
        return function (b) {
            switch (type) {
                case 'add':
                    return a + b;
                case 'sub':
                    return a - b;
                case 'mul':
                    return a * b;
                case 'div':
                    return a / b;
            }
        }
    }
}

var cal = evaluate('mul')(4)(2);
// console.log(cal);


//ex: infinite curry, find infinite sum 
function infiniteSum(a){
    return function(b){
        if(b){
            return infiniteSum(a+b);
        }
        return a;
    }
}
var cal = infiniteSum(10)(20)(30)(10)(); //last one should be empty
// console.log(cal);

//ex: implementation of curry to Manipulate DOM
function updateElementText(id){
    return function(content){
        document.querySelector('#'+id).textContent = content;
    }
}

const updateHeading = updateElementText('para');
updateHeading('This is new Heading!');


//convert any f(a,b,c,d) into currry f(a)(b)(c)(d);
//generalised method
function curryMaker(fn){    
    return function curriedFunc(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}

var findSum = (a,b,c,d) => a+b+c+d;
var curFn = curryMaker(findSum);
var sum = curFn(10)(20)(30)(40); 
// console.log(sum);