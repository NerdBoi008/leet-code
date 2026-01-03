/**
 * LeetCode #9 - Palindrome Number
 * Difficulty: Easy
 * https://leetcode.com/problems/palindrome-number
 *
 * Time: O(1)
 * Space: O(1)
 */

function isPalindrome(x: number): boolean {
  if(x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversed = 0;
  let temp = x;

  while(temp) {
    const lastDigit = temp % 10;
    reversed = (reversed * 10) + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return x === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

