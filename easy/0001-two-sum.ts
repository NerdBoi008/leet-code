/**
 * LeetCode #1 - Two Sum
 * Difficulty: Easy
 * https://leetcode.com/problems/two-sum 
 *
 * Time: O(n)
 * Space: O(1)
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
};


console.log(twoSum([2,7,11,15], 6));
