/*
Objects & Class
*/
let user = {
    'name' : 'Rahul',
    'age' : '10'
}
user = {...user, city : 'Jaipur'};
// console.log(user);

//destructuring an object;
const {name : username, age} = user;
// console.log(username, age);

//two objects are same if their references are same 
// console.log({a:1} === {a:1}); //false

const obj1 = {a:1};
const obj2 = obj1;
// console.log(obj1 === obj2); //true

//ex: find output
function changeAgeAndRef(person){
    person.age = 25;
    person = {
        name : 'Ankit',
        age : 50,
    }
    return person;
}
const person1 = {
    name : 'Rahul',
    age : 40,
}
const person2 = changeAgeAndRef(person1);
// console.log(person1, person2);

//Shallow and Deep copy of Objects
const person3 = person1; //shallow copy, when a variable refrence to object.

const person4 = Object.assign({}, person1); //complete object copied, person4 will have a new refrence as well.


//ex: create object calculator
let calc = {
    value : 0,
    add(val){
        this.value+=val;
        return this;
    },
    sub(val){
        this.value-=val;
        return this;
    },
    mul(val){
        this.value-=val;
        return this;
    },
    div(val){
        this.value-=val;
        return this;
    },
    printRes(){
        // console.log(this.value);
        return this;
    }
}
calc.printRes().add(20).add(10).mul(2).sub(20).printRes(); 

//this keyword inside object
let refObj = {
    username : 'username',
    names : {
        name : this,  //points to window
    },
    ref : this,    //points to window
    func(){
        return this;  //points to object refObj
    },
    arrowFunc : () => {
        return this; //points to window, no binding in arrow functions with 'this' ketword
    },
    func2(){
        let name = () => {return this.username};  //points to object as this in arrow has ho binding but it is used inside of a named function
        return name();
    }
}


class Cars{
    //this keyword in class points to everything present inside constructor
    constructor(n){
        this.name = n;
    }

    getCarName(){
        return this.name;
    }
}

let myCar = new Cars('Random');
// console.log(myCar.getCarName());