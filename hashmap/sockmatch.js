"use strict";
/* 
**************** QUESTION DESCRIPTION ***********************
 John works at a clothing store. 
 He has a large pile of socks that he must pair by color for sale. 
 Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 For example, arr = [1, 2, 1, 2, 1, 3, 2] . There is one pair of color 1 and one of color 2. 
 
 There are three odd socks left, one of each color. The number of pairs is 2.
******************** CONSTRAINTS ****************************
    1 <= arr.length <= 100, 1 <= arr[i] <= 100
********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************
    Input: array
    Output: integer /number
    Edge/Outlier:
********************** EXAMPLES *****************************
    Input: arr = [1, 2, 1, 2, 1, 3, 2]
    Output: 2
    Explanation:
    Input: 
    Output:
    Explanation:
*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************
loop through the array
store values in a hashmap
set key value pair in hashmap, increase the pairs, delete key value pair in hashmap

******************* Time / Space *****************************
    Time: 
    Space: 
******************** FUNCTION ****************************  */
function sockMerchant(arr) {
  let pairs = 0;
  let hash = new Map();

  for (const sock of arr) {
    if (hash.get(sock)) {
      pairs++;
      hash.delete(sock);
    } else {
      hash.set(sock, true);
    }
    console.log(hash);
  }
  return pairs;
}
sockMerchant([1, 2, 1, 2, 1, 3, 2]);
// **************** TESTING ******************************** //
class TestSocks {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  }
}
// let test1 = new TestSocks(`test1`, 2, sockMerchant([1, 2, 1, 2, 1, 3, 2]));
// let test2 = new TestSocks(
//   "test2",
//   3,
//   sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])
// );
// let test3 = new TestSocks(`test3`, 3, sockMerchant([1, 1, 1, 1, 1, 1, 1, 2]));
// console.table([test1, test2, test3]);
