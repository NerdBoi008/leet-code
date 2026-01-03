/**
 * LeetCode #13 - Roman to Integer
 * Difficulty: Easy
 * https://leetcode.com/problems/roman-to-integer
 *
 * Time: O(n)
 * Space: O(1)
 */

function romanToInt(s: string) {
  const romanMap: Map<string, number> = new Map(
    Object.entries({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    })
  );

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i])!;
    const next = romanMap.get(s[i + 1])!;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
