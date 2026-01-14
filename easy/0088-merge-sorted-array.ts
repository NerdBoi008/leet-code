/**
 * LeetCode #88 - Merge Sorted Array
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-sorted-array
 *
 * Time: O(n)
 * Space: O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;          // last valid index in nums1
  let j = n - 1;          // last index in nums2
  let k = m + n - 1;      // last index in nums1 (including extra space)

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
