//ASYNC JS Programming
//Callbacks, Promise, Async/Await

const datas = [
  { name: "Sanu", profession: "SDE1" },
  { name: "Subham", profession: "SDE2" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.map((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createData(newData) {
//   setTimeout(() => {
//     datas.push(newData);
//   }, 2000);
// }
// getDatas();

// createData({ name: "Suraj", profession: "SDE" });

//the problem here is that Suraj is not getting displayed because the getDatas() is called before the createData() is executed. So, we need to use callbacks to solve this problem.

//Callbacks

// function createData(newData, callback) {
//   setTimeout(() => {
//     datas.push(newData);
//     callback();
//   }, 2000);
// }
//createData({ name: "Suraj", profession: "SDE" }, getDatas);

//Promises
function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      const error = false;
      !error ? resolve("resolved") : reject("Error: Something went wrong");
    }, 2000);
  });
}

// createData({ name: "Suraj", profession: "SDE" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

//Async/Await
async function start() {
  const res = await createData({ name: "Suraj", profession: "SDE" });
  console.log(res);
  getDatas();
}
start();
