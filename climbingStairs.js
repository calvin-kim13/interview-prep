/* 
**************** QUESTION DESCRIPTION ***********************
    You are climbing a stair case. It takes n steps to reach to the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
******************** CONSTRAINTS ****************************
    1 <= n <= 45
********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************
    Input:  
    Output: 
    Edge/Outlier:
********************** EXAMPLES *****************************
    Input:  2
    Output: 2
    Explanation:
        1. 1 step + 1 step
        2. 2 steps
    Input:  3
    Output: 3
    Explanation:
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step
    Input:  4
    Output: 5
    Explanation:
        1. 1 step + 1 step + 1 step + 1 step
        2. 1 step + 1 step + 2 steps
        3. 1 step + 2 steps + 1 step 
        4. 2 steps + 1 step + 1 step
        5. 2 steps + 2 steps 
*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************
    
    ** BRAIN POWER **
******************* Time / Space *****************************
    Time: 
    Space: 
******************** FUNCTION ****************************  */
function climbingStairs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// climbingStairs(4);
// console.log(climbingStairs(3));
console.log(climbingStairs(4));
// **************** TESTING ******************************** //
class Test {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  }
}
const test1 = new Test("Test 1", 2, climbingStairs(2));
const test2 = new Test("Test 2", 3, climbingStairs(3));
const test3 = new Test("Test 3", 1346269, climbingStairs(30));
const test4 = new Test("Test 4", 573147844013817200000, climbingStairs(100));
console.table([test1, test2, test3, test4]);
