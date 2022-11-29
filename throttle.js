//Throttling is a technique used to limit the number of times a function can be called in a given time period.

console.log("In throttle fie!!");

// let throttle_counter = 1;
// const getData = () => {
//   console.log("Fetching data...", throttle_counter++);
// };

// function myThrottle(fn, delay) {
//   let flag = true;
//   return function () {
//     let context = this;

//     let args = arguments;
//     if (flag) {
//       fn.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// }

// const betterFunction = myThrottle(getData, 5000);

const mybut = document.getElementById("mybut");

const myThrottle = (fn, delay) => {
  return function (...args) {
    mybut.disabled = true;
    setTimeout(() => {
      fn();
    }, delay);
  };
};

const doMagic = myThrottle(() => {
  mybut.disabled = false;
  console.log("User clicked");
}, 2000);
