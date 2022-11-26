//ARRAY K SATH
//Rest operator
//ES5
function addNumbers() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(addNumbers(1, 2, 3, 4, 5));

//ES6
addNumbers = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 10));

//Spread Operator
function add(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(add(...numbers));
// expected output: 6

console.log(add.apply(null, numbers));
// expected output: 6

//OBJECT K SATH
const user = {
  firstName: "Sanu",
  lastName: "Jaiswal",
  age: 22,
  hobbies: ["Coding", "Gaming", "Sleeping"],
  address: {
    city: "Sahibganj",
    state: "Jharkhand",
  },
};

console.log(`Age: ${user.age}`); //ES5
//Rest operator
const { age, ...rest } = user; //using destructuring
console.log(age, rest);

//Spread operator
const user2 = {
  ...user,
  age: 23,
  hobbies: [...user.hobbies, "Dancing"],
  address: { ...user.address, state: "Delhi" },
};
console.log(user2);
