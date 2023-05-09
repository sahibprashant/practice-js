/*
Promises, Sync-Async Code & async/await:
Promise Chaining
Promise.all
Promise.allsetteled
Promise.race
Promise.any
Promise Pollyfills
*/

//to handle multiple nested-callbacks/callback-hell we we Promises
//resolve(), reject() both are async tasks
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let res = true;
        if (res) {
            resolve('promise resolved');
        } else {
            reject('promise rejected');
        }
    }, 1000);
    // console.log('called');
});

promise.then((msg) => {
    // console.log(msg);
}).catch((err) => {
    // console.log(err);
});


//instead of nested callbacks we can use promises
function actionone(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Message: ${msg}`);
        }, 1000);
    });
}

function actiontwo(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Message: ${msg}`)
        }, 1000);
    })
}

actionone('Action One Performed!').then((res) => {
    // console.log(res);
    actiontwo('Action two Performed!').then((res2) => {
        // console.log(res2);
    }).catch((err2) => {
        //error 2
    })
}).catch((err) => {
    //error 1
})

//Promise Chaining, to make this code better
//this way we can handle as much promises we want, using multiple then/catch blocks, 
//all then blocks will get executed one after other and if any of them returns promise then that will also handled
actionone('Action One Performed!').then((res) => {
    // console.log(res);
    return actiontwo('Action Two Performed!');
}).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.log(err);
});


let promise1 = new Promise((resolve, reject) => {
    resolve(1)
});

let promise2 = new Promise((resolve, reject) => {
    resolve(2)
})

let promise3 = new Promise((resolve, reject) => {
    resolve(3)
})

//if all promises fulfilled then returns an array of resolves otherwise catch error for unfulfilled promise
Promise.all([
    promise1, promise2, promise3
]).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
});

//returns an array of all promises after execution, rejected and resolved both!
Promise.allSettled([
    promise1, promise2, promise3
]).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
});

//returns the fisrt executed promise, either fuilfilled or rejected
Promise.race([
    promise1, promise2, promise3
]).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
});

//returns first fuilfilled promise and it ignores the rejected onces.
Promise.any([
    promise1, promise2, promise3
]).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
});


//async/await
//await waits for the promise(or some async code) to execute(or return some value), we have to make function async if we are using await!
//with await, code execute in synchronous manner.
let namePromise = new Promise((resolve, reject) => {
    resolve('Promise Resolved!');
})

async function printNameDelay() {
    let name = await namePromise;
    // console.log(name);
}

printNameDelay();

//we use try catch to handle error
const res = async () => {
    try {
        const msg1 = await promise1;
        // console.log(msg1);
        const msg2 = await promise2;
        // console.log(msg2);
        const msg3 = await promise3;
        // console.log(msg3);
    } catch (error) {
        // console.log('Rejected Prmose: ' + error);
    }
}

res();

//Pollyfill of Promise
function MyPromisePollyfill(executor) {
    let onResolve, onReject, isResolved = false, isReject = false, isCalled = false, value;

    function resolve(val) {
        isResolved = true;
        value = val;
        if (typeof onResolve == 'function') {
            onResolve(value);
            isCalled = true;
        }
    }

    function reject(val) {
        isReject = true;
        value = val;
        if (typeof onReject == 'function') {
            onReject(value);
            isCalled = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;
        if (isResolved && !isCalled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;
        if (isReject && !isCalled) {
            onReject(value)
        }
        return this;
    }

    executor(resolve, reject);
}


promise = new MyPromisePollyfill((resolve, reject) => {
    //code
    setTimeout(() => {
        resolve('MyPromisePollyfill Resolved!')
    }, 1000);
})

promise.then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
})

//Promise.all Polyfill, we can also add this to our MyPromisePollyfil function in same way
Promise.myall = function(promises){
    return new Promise((resolve, reject) => {
        let result = [];
        let pending = promises.length;
        promises.forEach((item, index) => {
            Promise.resolve(item).then((res) => {
                result[index] = res;
                pending--;
                if(pending == 0){
                    resolve(result)
                }
            },reject);
        })
    })
}

Promise.myall([
    promise1, promise2, promise3
]).then((res) => {
    // console.log(res);
}).catch((err) => {
    // console.error(err);
})


//ex: rewrite loadJSON function using async/await
function loadJSON(url){
    return fetch(url).then((res) => {
        if(res.status == 200){
            return res.json();
        }else{
            throw new Error(res.status)
        }
    })
}
// loadJSON('url').then((res) => {}).catch((err) => {})
const loadJSON2 = async(url) => {
    const res = await fetch(url);
    const json = await JSON.parse(res);
    if(json.status == 200){
        return json;
    }else{
        throw new Error(json.status);
    }
}

//ex: Write a function which takes promises array and solves them recursively
function recPromise(promises){
    if(promises.length == 0)
        return;
    const curPromise = promises.shift();
    curPromise.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    recPromise(promises);
}
// recPromise([promise1, promise2, promise3]);