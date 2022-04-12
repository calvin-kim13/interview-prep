"use strict";
/*
**************** QUESTION DESCRIPTION **********************
    Given an array of integers. Remove all duplicates and then return the array. 
**************** CONSTRAINTS **************************** 
    Array only contains integers
**************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ************
    Input: Array 
    Output: Array
*************** EXAMPLES ************************************
        Input: [2, 1, 1, 2, 2, 3, 4]
        Output: [1, 2, 3, 4]
        Input: [1, 1, 1, 1, 1]
        Output: [1]
        Input: [1, 2, 3, 4, 5]
        Output: [1, 2, 3, 4, 5]
**************** PSEUDO CODE SOLUTION / BRAINSTORM *************
    *** BRAIN POWER *** 
 **************** FUNCTION ****************  */
function deleteDuplicates(arr) {
  let hash = new Map();

  return arr.filter((number) => {
    if (hash.has(number)) {
      return false;
    } else {
      // console.log(hash);
      return hash.set(number, true);
    }
  });
}
console.log(deleteDuplicates([2, 1, 1, 2, 2, 3, 4]));
// **************** TESTING **************** //
class Test {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  }
}
// const test1 = new Test('Test 1', [1, 2, 3], deleteDuplicates([2, 1, 1, 2, 2, 3, 3]));
// const test2 = new Test('Test 2', [1], deleteDuplicates([1, 1, 1, 1, 1, 1]));
// const test3 = new Test('Test 3', [1, 2, 5], deleteDuplicates([1, 2, 5]));
// console.table([test1, test2, test3]);

// ---------------------------------
//            Set (Fast)
// Code-golf hole in 1.
// Use the new spread operator and set
// return [...new Set(arr)];
// ---------------------------------
//              Hash-1 (Fast)
// const seen = {};
// return arr.filter((number) => {
//     return seen[number] ? false : seen[number] = true;
// })
// ---------------------------------
//              Sorting (Kinda slow)
// arr.sort();
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 1);
//         i--;
//     }
// }
// return arr;
// ---------------------------------
//              Brute Force (BAD)
// for (let i = 0; i < arr.length; ++i) {
//     for (let j = i + 1; j < arr.length - i; ++j) {
//         if (arr[i] === arr[j]) {
//             arr.splice(j, 1);
//             j--;
//         }
//     }
// }
// return arr;
// ---------------------------------
//              Student answer
// let hash = new Map();
// return arr.filter(number => {
//     if (hash.has(number)) {
//         return false;
//     } else {
//         return hash.set(number, true)
//     }
// })
