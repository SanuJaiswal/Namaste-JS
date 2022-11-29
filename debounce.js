//Debouncing is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval. It is used to increase performance by limiting the number of times a function is called.

console.log("In debounce fie!!");
let debounce_counter = 1;
const getData = () => {
  console.log("Fetching data...", debounce_counter++);
};

function myDebounce(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const betterFunction = myDebounce(getData, 1000);
//if diff of time between two key presses > 3000ms then only getData will be called
