console.log("In memo file!!");
//Memoization is an optimization technique that can be used to time-consuming calculations by saving previous input in cache and returning the result if the same input occurs again.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      console.log("Fetching from cache");
      console.log(cache);
      return cache[args];
    }
    console.log("Calculating result first time");
    //const result = fn.apply(this, args);
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

function add(a, b) {
  console.log("add");
  return a + b;
}
console.time();

const memoizedAdd = memoize(add);

console.log(memoizedAdd(4, 3));
console.timeEnd();
console.time();
console.log(memoizedAdd(4, 3));
console.timeEnd();
