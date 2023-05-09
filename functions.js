//function
function printName(n) {
    console.log(n);
    //also
    var name = arguments[0];
}

printName('Username')

//function expression 
const printNameExp = function (val) {
    //anonymous function: function with no name 
    //we have assigned a anonymous function to printName
    return 'Name is' + val;
}

const nameExp = printNameExp('name');
console.log(nameExp);

//IIFE/self called functions
(function square() {
    console.log('IIFE Called ');
})();

//arrow function
const doubleValue = (val) => 2 * val;

let user = {
    name: 'Name',
    print1() {
        return this.name; //this points to user obj
    },
    print2: () => {
        return this.name; //this points to window obj
    },
    printFn() {
        const nameVal = () => { return this.name }; //this points to user obj
        return nameVal();
    }
}

//callback function : whenever a function is passed as a parameter in a function
function fn(cb){
    cb('callback called');
}

fn(function(msg){
    console.log(msg);
})

//ex:
function printValReturnDouble(val, fn){
    return fn(val);
}
let dv = printValReturnDouble(20, function(val){
    console.log(val);
    return 2*val;
})
// console.log(dv);

//ex: fix firstsecond function to output
//first
//second
//called
function firstsecond(){
    setTimeout(() => {
        console.log('first');
    }, 1000);
    setTimeout(() => {
        console.log('second');
    }, 500);
    console.log('called');
    //output:
    //called
    //second
    //first
}
// firstsecond();

function firstsecondFix(){
    function callfirst(cb){
        setTimeout(() => {
            cb('first');
        }, 1000);
    }

    function callSecond(cb){
        setTimeout(() => {
            cb('second')
        }, 500);
    }

    callfirst(function(msg1){
        console.log(msg1);
        callSecond(function(msg2){
            console.log(msg2);
            console.log('called');
        })
    });
}
firstsecondFix();