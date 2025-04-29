let arr = [1, 2, 3, 4];
arr.length = 0;
console.log("arra===", arr);
let arr1 = [1, 2, 3, 4];
arr2 = [];
console.log("arr2===", arr2);

// duplicate array removal
let dupArr = [1, 3, 4, 4, 6, 7];
let uniqueArray = [];
for (let i = 0; i < dupArr.length; i++) {
  if (!uniqueArray.includes(dupArr[i])) {
    uniqueArray.push(dupArr[i]);
  }
}
console.log("unique array ,", uniqueArray);

let dup = [];
let unique = [];
for (let num of dupArr) {
  if (unique.includes(num)) {
    if (!dup.includes(num)) {
      dup.push(num);
    }
  } else {
    unique.push(num);
  }
}

console.log("unique ", unique);

// merge Sort is based on divide and conqure

function mergeSort(mergingArray) {
  if (mergingArray.length <= 1) return mergingArray;
  const mid = Math.floor(mergingArray.length / 2);
  const left = mergeSort(mergingArray.slice(0, mid));
  const right = mergeSort(mergingArray.slice(mid));
  return mergingArrayFn(left, right);
}
function mergingArrayFn(left, right) {
  let mergeResult = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeResult.push(left[i]);
      i++;
    } else {
      mergeResult.push(right[j]);
      j++;
    }
  }
  return mergeResult.concat(left.slice(i)).concat(right.slice(j));
}
let merg = [8, 2, 9, 8, 5, 6];
console.log("mergeSort==", mergeSort(merg));

function flattendObj(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattendObj(obj[key]));
    } else {
      result[key] = obj[key];
    }
  }
  console.log("result ", result);
  return result;
}
let fObj ={
    name :"Mamta",
    profile :{
        role :"frontend developer",
        tech :"Angular",
        skills:{
            language :"JS",
            framwork :"angular",
            lib :"react"
        }
    }
}

console.log("flattened obj ==== ",flattendObj(fObj))