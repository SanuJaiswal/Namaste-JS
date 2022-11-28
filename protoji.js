console.log("In protoji file!!");
//PROTOTYPES
const obj = {
  name: "Sanu",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};

console.log(obj);

const obj2 = {
  roll: 1,
  name: "Vivaan",
  __proto__: obj,
};

console.log(obj2);
console.log("Name is: " + obj2.getName()); //getName() is inherited from obj and Vivaan is output as name property is present in obj2
console.log("Roll is: " + obj2.getRoll()); //1 is output as roll property is present in obj2

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};

console.log(obj3.getName()); //Vivaan is output as name property is present in obj2 and if not in obj2 it will be searched in obj and print Sanu

Array.prototype.show = function () {
  return this;
};
const cities = ["Delhi", "Mumbai", "Kolkata"];
console.log(`Arr.proto: ${cities.show()}`);

function myProto(name) {
  this.name = name;
}
myProto.prototype = obj;
const myObj = new myProto("Subham");
console.log(myObj.getRoll()); //undefined is output as roll property is not present in myObj/obj
console.log(myObj.getName()); //Subahm is output as name property is present in myObj
