/**
 * LeetCode #14 - Longest Common Prefix
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-common-prefix
 *
 * Time: O(n^2)
 * Space: O(1)
 */

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  for (let index = 0; index < strs.length; index++) {
    const char = strs[0][index];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][index] !== char || index >= strs[j].length) {
        return strs[0].substring(0, index);
      }
    }
  }

  return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
