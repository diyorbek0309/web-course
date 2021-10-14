// setTimeout(() => {
//   console.log("123");
// }, 2000)

// console.log("345");
// console.log("678");

function myDisplayer(text) {
  console.log(text);
}

function mySplitter(text) {
  console.log(text.split(""));
}

function myFirst(callbackFn) {
  callbackFn("Hello");
}

function mySecond(callbackFn) {
  callbackFn("Goodbye");
}

// myFirst(myDisplayer);
// mySecond(myDisplayer);

// myFirst(mySplitter);
// mySecond(mySplitter);

const logger = () => console.log("Log");

// setTimeout(logger, 2000)

// setInterval(logger, 3000);

// console.log("123");

// Promises

// let myPromise = new Promise((resolve, reject) => {
//   let x = 0;

//   const result = {
//     firtName: "Diyorbek",
//     lastName: "Olimov",
//     age: "21",
//     height: "185",
//     weight: "68"
//   }

//   if (x == 0) {
//     resolve(result);
//   } else {
//     reject("Error");
//   }
// });

// let age = 0;

// myPromise
//   .then((data) => {
//     return data;
//   })
//   .then((data) => {
//     age = data.age;
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   // .finally(() => {
//   //   console.log("123");
//   // });

// console.log(age);
  
// setTimeout(() => {
//   console.log(age);
// }, 0)


// Async- await

let myPromise = new Promise((resolve, reject) => {
    let x = 1;

    const result = {
      firtName: "Diyorbek",
      lastName: "Olimov",
      age: "21",
      height: "185",
      weight: "68",
    };

    if (x == 0) {
      resolve(result);
    } else {
      reject("Error");
    }
  })

const getDataAsync = async () => {
  try {
    let result = await myPromise;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getDataAsync()



