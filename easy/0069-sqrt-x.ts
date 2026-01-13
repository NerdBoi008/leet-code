/**
 * LeetCode #69 - Sqrt(x)
 * Difficulty: Easy
 * https://leetcode.com/problems/sqrtx
 *
 * Time: O(n)
 * Space: O(1)
 */

function mySqrt(x: number): number {
  if (x === 0) return 0;

  let guess = x;

  while (guess * guess > x) {
    guess = Math.floor((guess + x / guess) / 2);
  }

  return guess;
}

console.log(mySqrt(4))
console.log(mySqrt(8))