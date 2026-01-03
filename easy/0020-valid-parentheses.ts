/**
 * LeetCode #20 - Valid Parentheses
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-parentheses
 *
 * Time: O(n^2)
 * Space: O(1)
 */

function isValid(s: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    else {
      if (stack.length === 0) return false;

      const top = stack.pop();
      if (top !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
