/**
 * LeetCode #67 - Add Binary
 * Difficulty: Easy
 * https://leetcode.com/problems/add-binary
 *
 * Time: O(n)
 * Space: O(1)
 */

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result: string[] = [];

  while (i >= 0 || j >= 0 || carry) {
    const sum =
      (i >= 0 ? Number(a[i--]) : 0) +
      (j >= 0 ? Number(b[j--]) : 0) +
      carry;

    result.push(String(sum % 2));
    carry = Math.floor(sum / 2);
  }

  return result.reverse().join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
