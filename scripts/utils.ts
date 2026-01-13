class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrToLinkList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  let ll: ListNode | null = null;
  let currentNode: ListNode;
  arr.map((value) => {
    if (ll === null) {
      ll = new ListNode(value);
      currentNode = ll;
    } else {
      currentNode.next = new ListNode(value);
      currentNode = currentNode.next;
    }
  });

  return ll;
}

function listToArray(ll: ListNode): Array<number> | null {
  if (ll === null) return null;
  const arr: Array<number> = [];
  let currentNode: ListNode | null = ll;
  while (currentNode !== null) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return arr;
}
