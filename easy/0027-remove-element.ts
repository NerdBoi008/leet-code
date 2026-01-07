/**
 * LeetCode #27 - Remove Element
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-element
 *
 * Time: O(n)
 * Space: O(1)
 */

function removeElement(nums: number[], val: number): number {
  let noOfValOccurs = nums.length;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    } else {
      noOfValOccurs--;
    }
  }

  return noOfValOccurs;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
