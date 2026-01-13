/**
 * LeetCode #70 Climbing Stairs
 * Difficulty: Easy
 * https://leetcode.com/problems/climbing-stairs
 *
 * Time: O(n)
 * Space: O(1)
 */

function climbStairs(n: number): number {
  if (n === 1) return 1;
  else if (n === 2) return 2;
  else {
    let lastStepValue = 2;
    let lastSecondStepValue = 1;
    let currentStep = 3;
    let currentStepValue = 3;
    while (currentStep <= n) {
      currentStepValue = lastSecondStepValue + lastStepValue;
      lastSecondStepValue = lastStepValue;
      lastStepValue = currentStepValue;
      currentStep++;
    }
    return currentStepValue;
  }
}

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));

for (let i = 0; i < 20; i++) {
  const number = Math.floor(Math.random() * 50);
  console.log({
    climbStairs: climbStairs(number),
    input: number,
  });
}
