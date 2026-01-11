/**
 * LeetCode #58 - Length of Last Word
 * Difficulty: Easy
 * https://leetcode.com/problems/length-of-last-word
 *
 * Time: O(n)
 * Space: O(1)
 */

function lengthOfLastWord(s: string): number {
  let count = 0;
  let i = s.length - 1;

  // skip trailing spaces
  while (i >= 0 && s[i] === " ") i--;

  // count last word
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
}

console.log(lengthOfLastWord("Hello World"));
console.log("----------------");
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log("----------------");
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log("----------------");
console.log(lengthOfLastWord("w"));
