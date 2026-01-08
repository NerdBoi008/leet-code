/**
 * leetcode #28 - Find the Index of the Fist Occurrence in a String
 * difficulty: easy
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 *
 * time: o(n)
 * space: o(1)
 */

function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matched = true;

    for (let j = 0; j < needle.length; j++) {
      console.log(`h: ${haystack[i + j]} = ${needle[j]}`);
      if (haystack[i + j] !== needle[j]) {
        matched = false;
        break;
      }
    }

    if (matched) return i;
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("mississippi", "sipp"));
console.log(strStr("leetcode", "leeto"));
