/**
 * LeetCode #35 - Search Insert Position
 * Difficulty: Easy
 * https://leetcode.com/problems/search-insert-position
 *
 * Time: O(log n)
 * Space: O(1)
 */

function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    console.log("current value: ", nums[mid]);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
