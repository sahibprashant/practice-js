/**
 * Debouncing & Throttling
 */

//Debouncing: helps us in executing a peice of code or a function after a 'hold of' certain amount of time.
//it will check the time gap, if it is equal to the given wait milliseconds then it will call the function 
//thus executes the function after a hold of given wait millisec.

//Throtlling: calls a function only once after a given wait of time.
//initially it calls the function immediately then it will do the next call after given wait millisec
//thus executes the function once in given wait millisec.

const debouncing_div = document.querySelector('.debouncing_div');
debouncing_div.style.display = "block";

const btn = document.querySelector('.inc_btn');
const btnPressed = document.querySelector('.pressed_count');
const debCount = document.querySelector('.deb_triggered_count');
const thCount = document.querySelector('.th_triggered_count');

var incerementCount = 0;
var debTriggeredCount = 0;
var thTriggeredCount = 0;

//using lodash functions
//calls the debfunc after a gap of 800ms in simultaneous calls
const debfunc = _.debounce(function () {
    debCount.innerHTML = ++debTriggeredCount;
}, 800)

//call the thfunc once in 800ms
const thfunc = _.throttle(function () {
    thCount.innerHTML = ++thTriggeredCount;
}, 800)


//Pollyfil for Debounce
const myDebounce = function (cb, wait) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, wait);
    }
}

const deb = myDebounce(function () {
    //action
    debCount.innerHTML = ++debTriggeredCount;
}, 1000)


//Pollyfil for Throttling
//we have to call the callback only once in given delay time or wait
const myThrottle = function(cb, wait){
    let last = 0;
    return function(...args){
        let now = new Date().getTime();
        if(now - last < wait) return;
        last = now;
        cb(...args);    
    }
}

const throt = myThrottle(function(){
    thCount.innerHTML = ++thTriggeredCount;
}, 800);


btn.addEventListener('click', function () {
    btnPressed.innerHTML = ++incerementCount;
    // debfunc();
    // thfunc();

    //calling pollyfills
    deb();
    throt();
});