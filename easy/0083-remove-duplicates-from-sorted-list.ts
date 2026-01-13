import { arrToLinkList } from "../scripts/utils.js";

/**
 * LeetCode #83 - Remove Duplicates from Sorted List
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list
 *
 * Time: O(n)
 * Space: O(1)
 */

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let lastNode: ListNode = head;
  let currentNode: ListNode | null = lastNode.next;
  while (currentNode !== null) {
    if (lastNode.val === currentNode.val) {
      lastNode.next = currentNode.next;
    } else {
      lastNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return head;
}

const list = arrToLinkList([1, 1, 2, 3, 3]);

console.log(deleteDuplicates(list));

