//data hiding
function counter() {
  var cnt = 0;
  return {
    add: function (inc) {
      cnt += inc;
    },
    retrieve: function () {
      console.log("The counter is currently at: " + cnt);
    },
  };
}

var c = counter();
c.add(5);
c.add(9);
c.add(9);
c.add(9);
c.add(9);
c.retrieve();

var x = 10;

//Checking hoisting
function getName() {
  console.log("Hello World");
}
getName();
console.log(x);
console.log(getName);

// For event loop
// function attachEvent() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Clicked", ++count);
//   });
// }
// attachEvent();

//hof use case
const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//map+filter+reduce
const users = [
  { firstName: "John", lastName: "Singh", age: 26 },
  { firstName: "Peter", lastName: "Parker", age: 75 },
  { firstName: "Harry", lastName: "Potter", age: 30 },
  { firstName: "Clark", lastName: "Kent", age: 26 },
];

// list of full names of users
const output = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(output);

// {26: 2, 75: 1, 30: 1}
const output2 = users.reduce((acc, curr) => {
  acc[curr.age] ? acc[curr.age]++ : (acc[curr.age] = 1);
  return acc;
}, {});
console.log(output2);

// list of users firstname with age less than 30
const output3 = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

//OR
const output4 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output3);
console.log(output4);

//call+apply+bind
const userName = {
  firstname: "John",
  lastname: "Doe",
};

let printFullName = function (hometown, state) {
  console.log(`${this.firstname} ${this.lastname} from ${hometown},${state}`);
};

printFullName.call(userName, "Delhi", "Mumbai");
printFullName.apply(userName, ["Delhi", "Mumbai"]);
let copy_of = printFullName.bind(userName, "Delhi", "Mumbai");
copy_of();

// Polyfill for bind method
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName = printFullName.myBind(userName, "Delhi");
printMyName("Mumbai");

//Currying using bind method
function mul(val1, val2) {
  console.log(val1 * val2);
}

let out1 = mul.bind(this, 2);
out1(3); // 6
out1(4); // 8

//Currying using closures
function mul2(val1) {
  return function (val2) {
    console.log(val1 * val2);
  };
}

let a = mul2(2);
a(5);
a(6);

// How to convert an existing function into a curried version?
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 5, 8));

// To

function sanu(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(sanu(2)(5)(8));

//another example (infinte currying)

// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

let sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)(4)());

// Promise
// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentinfo) {
//     console.log(paymentinfo);
//   })
//   .catch((err) => console.log(err.message)) //catch check then methods which are top of it
//   .then((orderId) => console.log("I am inevitable"));

// //Producer
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!valideCart(cart)) {
//       const err = new Error("Invalid Cart");
//       reject(err);
//     }
//     const orderId = "12345";
//     setTimeout(() => {
//       resolve(orderId);
//     }, 5000);
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Done");
//   });
// }

// function valideCart(cart) {
//   return true;
// }

let cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo", paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  })
  .catch(function (err) {
    console.log("Error", err);
  });

function isValidCart(cart = []) {
  return !!cart.length;
}

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!isValidCart(cart)) {
      reject(new Error("Cart is not valid"));
    }
    // Call the API for adding items into cart
    const orderId = Math.floor(Math.random() * 100000);
    resolve(orderId);
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      reject(new Error("Error while payment"));
    }
    // Call the API for payment
    const paymentInfo = {
      paidAmount: 1000,
      balanceAmount: 500,
    };
    resolve(paymentInfo);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    // Call the API if any
    console.log(
      `Order summary is displayed || Paid Amount: ${paymentInfo.paidAmount}`
    );
    resolve(paymentInfo);
  });
}

function updateWallet(paymentInfo) {
  return new Promise(function (resolve, reject) {
    // Call the API if any
    console.log(
      `Updated wallet balance || Balance amount: ${paymentInfo.balanceAmount}`
    );
    resolve(paymentInfo);
  });
}

// Sample Output:
// Order ID 53852
// paymentInfo {paidAmount: 1000, balanceAmount: 500}
// Order summary is displayed || Paid Amount: 1000
// Updated wallet balance || Balance amount: 500
