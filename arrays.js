/*
Array Methods :
push(), pop(), sort(), concat(), slice(), splice(), shift(), unshift(),map(), filter(), reduce();

Pollyfills of map(), filter(), reduce()
*/
const arr = [2, 3, 4, 6, 7];

//sort()
arr.sort()
// console.log(arr);
arr.sort((a, b) => { return b - a }); //in reverse order
// console.log(); 

//concat()
const arr2 = [22, 44, 45];
const arr3 = arr.concat(arr2); //do not modify the old arrays
// console.log(arr3);

//slice()
const arr4 = arr.slice(0, 3); //slices out the elements and do not modifiy the original array
// console.log(arr4);

//splice()
arr.splice(0, 2); //extract number of elements from array and returns it, also modify the original array

let a = arr.shift();
arr.unshift(a); //inserting at the begining

//loops in array
arr.forEach((item, index) => {
    // console.log(item);
})

for (x in arr) {
    //x will be index of array here, with 'in' keyword
    // console.log(arr[x]);
}

for (x of arr) {
    //x will be values of arr
    // console.log(x);
}

//map: creates a new array from original array by applying a function on each element
const newArr = arr.map((item, index, array) => {
    return `Item: ${item}, Index: ${index}`
})
// console.log(newArr);

//filter()
const filterVal = arr.filter((item, index) => {
    return item > 2;
})
// console.log(filterVal);


//reduce()
const total = arr.reduce((acc, curVal) => {
    return acc + curVal;
}, 0)
// console.log(total);


/*
Polyfills of Map, filter and reduce
*/

//polyfills of map()
Array.prototype.myMap = function (cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res[i] = cb(this[i], i, this);
    }
    return res;
}

//using myMap
const newarr = arr.myMap((item, index, array) => {
    return item * 2 + index;
})
console.log(newarr);


//polyfills of filter()
Array.prototype.myFilter = function (cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}

const ele = arr.myFilter((item, index, array) => {
    return
})


//polyfills of reduce()
Array.prototype.myReduce = function (cb, initVal) {
    let res = initVal;
    for (let i = 0; i < this.length; i++) {
        res = res ? cb(res, this[i], i, this) : this[i];
    }
    return
}

const redVal = arr.myReduce((acc, item, index, arr) => {
    return acc + item;
}, 0)


//Question:
const marks = [
    {
        name: 'Ankit',
        marks: '50',
    }, {
        name: 'Hari',
        marks: '40',
    }, {
        name: 'Shiv',
        marks: '80',
    }, {
        name: 'Amol',
        marks: '35',
    }, {
        name: 'Krishna',
        marks: '75',
    }, {
        name: 'Amit',
        marks: '80',
    }, {
        name: 'Kajal',
        marks: '25',
    }
]

//return only names in capital
const names = marks.map((item) => {
    return item.name.toUpperCase();
})
// console.log(names);

//return who scored more than 60
const names60 = marks.filter((item) => {
    return item.marks > 60 ? item : false;
})
// console.log(names60);

//return sum of all marks
const sumOfMarks = marks.reduce((acc, item) => {
    return acc + Number(item.marks);
}, 0)
// console.log(sumOfMarks);

const nameMorethan60 = marks.filter((item, index, val) => {
    return item.marks >  60
}).map((item) => {
    return item.name;
});
// console.log(nameMorethan60);