// how to find min and max of array

// const arr = [34, 12, 54, 8, 98];
// const arr2 = [139, 234, 89, 118, 94];

function findMin(arr) {
  let res = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // if (res > arr[i]) {
    //   res = arr[i];    // min
    // }

    if (res < arr[i]) {
      res = arr[i]; // max
    }
  }

  return res;
}

// function findMin(arr) {
//   const updatedArray = arr.sort(function (a, b) {
//     return a - b;
//   });

//   // return updatedArray[0];  // min
//   return updatedArray[updatedArray.length - 1];  // max
// }

// console.log(findMin(arr));
// console.log(findMin(arr2));

// how to reverse an array without reverse method

const arr = [34, 12, 54, 8, 98];
const arr2 = [139, 234, 89, 118, 94];

function reverseArray(arr) {
  // return arr.reverse();
  let reversedArray = [],
    j = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   reversedArray.unshift(arr[i]);
  // }

  for (let i = arr.length - 1; i >= 0; i--) {
    // reversedArray.push(arr[i])
    reversedArray[j++] = arr[i];
  }

  return reversedArray;
}

// console.log(reverseArray(arr));
// console.log(reverseArray(arr2));

// return min and max of array

function minMax(arr) {
  result = [];

  const sortedArray = arr.sort(function (x, y) {
    return x - y;
  });

  result.push(sortedArray[0]);
  result.push(sortedArray[sortedArray.length - 1]);

  return result;
}

// console.log(minMax([1, 2, 3, 4, 5]));

function canNest(arr1, arr2) {
  const minMax1 = minMax(arr1);
  const minMax2 = minMax(arr2);

  if (minMax1[0] > minMax2[0] && minMax1[1] < minMax2[1]) {
    return true;
  }

  return false;
}

// console.log(canNest([9, 9, 8], [8, 9]));

function tuckIn(arr1, arr2) {
  let j = 1;
  let second = arr1[1];

  for (let i = 0; i < arr2.length; i++) {
    arr1[j++] = arr2[i];
  }

  arr1.push(second);

  return arr1;
}

// console.log(tuckIn([15, 150], [45, 75, 35]));

function lonelyInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        delete arr[i];
        delete arr[j];
      }
    }
  }
  return arr;
}

// console.log(lonelyInteger([1, -1, 2, -2, 3]))

function nestedLoops() {
  let count = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(count++);
    }
  }
}

nestedLoops();
