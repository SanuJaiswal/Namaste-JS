console.log("In useCase file!!");

//Map, set, Weakset, WeakMap

//Map
//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

//Methods and properties are:
//new Map() – creates the map.
//map.set(key, value) – stores the value by the key.
//map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//map.has(key) – returns true if the key exists, false otherwise.
//map.delete(key) – removes the value by the key.
//map.clear() – removes everything from the map.
//map.size – returns the current element count.

let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
console.log(map);
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3
console.log(map.get(true)); // "bool1"
console.log(map.get("2")); // undefined
console.log(map.get(2)); // undefined
map.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

//Set
//Set is a collection of values, where each value may occur only once.(only unique values)

//Methods and properties are:
//new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
//set.add(value) – adds a value, returns the set itself.
//set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
//set.has(value) – returns true if the value exists in the set, otherwise false.
//set.clear() – removes everything from the set.
//set.size – is the elements count.

let myArray = [1, 2, 3, 4];
let obj1 = new Set(myArray);
console.log(obj1);
console.log(obj1.add(5));
console.log(obj1.add(3));

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log(set.size); // 3
for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

//WeakMap and WeakSet

//WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.
//it can not be iterated and has no size property.
let wm = new WeakMap();
console.log(wm);
wm.set({}, "sa");
console.log(wm);

//WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.
//it can not be iterated and has no size property.
let ws = new WeakSet();
console.log(ws);
let o1 = { name: "John" };
ws.add(o1);
console.log(ws);
console.log(ws.has(o1));
