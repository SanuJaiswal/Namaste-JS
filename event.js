//Event Bubbling and Capturing
//Stop Propagation, Immediate Propagation and Prevent Default

//Event Bubbling: When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//Child ->Parent ->Grand Parent ->Great Grand Parent

const div = document.querySelector("div");
const button = document.querySelector("button");

// div.addEventListener("click", () => {
//   console.log("DIV");
// });

// button.addEventListener("click", () => {
//   console.log("BUTTON");
// });

//Event Capturing: The process is exactly the same, but the handlers are not called on the way down, but on the way up. That is: on the capturing phase the event goes down to the element, and then it goes up.
//Great Grand Parent ->Grand Parent ->Parent ->Child
//jst add true as a second argument to the event listener function

// div.addEventListener(
//   "click",
//   () => {
//     console.log("DIV");
//   },
//   true
// );

// button.addEventListener(
//   "click",
//   () => {
//     console.log("BUTTON");
//   },
//   true
// );

//Stop Propagation: event.stopPropagation() method stops the bubbling. So the event does not reach any other elements.

//In below exmaple only DIV is printed due to stopPropagation
//In case of event bubbling BUTTON will only be printed

// div.addEventListener(
//   "click",
//   (event) => {
//     console.log("DIV");
//     event.stopPropagation();
//   },
//   true
// );

// button.addEventListener(
//   "click",
//   (event) => {
//     console.log("BUTTON");
//     //event.stopPropagation();
//   },
//   true
// );

//Immediate Propagation: event.stopImmediatePropagation() method stops the bubbling and also prevents handlers on the current element from running.

div.addEventListener("click", () => {
  console.log("DIV");
});

button.addEventListener("click", (event) => {
  //event.stopPropagation(); //this stop DIV from printing
  event.stopImmediatePropagation(); //this stop DIV and BUTTON-2 from printing
  console.log("BUTTON");
});

button.addEventListener("click", () => {
  console.log("BUTTON-2");
});

//Prevent Default: event.preventDefault() method prevents the browser action. For instance, if a link is clicked, it won’t follow the reference.

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("LINK");
});
