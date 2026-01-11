/**
 * LeetCode #66 - Plus One
 * Difficulty: Easy
 * https://leetcode.com/problems/plus-one
 *
 * Time: O(n)
 * Space: O(1)
 */

function plusOne(digits: number[]): number[] {
  for (let index = digits.length - 1; index >= 0; index--) {
    if (digits[index] < 9) {
      digits[index]++;
      return digits;
    }
    digits[index] = 0;
  }
  return [1, ...digits];
}
