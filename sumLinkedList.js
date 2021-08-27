/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 */

class ListNode {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = function (l1 = null, l2 = null) {
  let sum = 0;
  const result = { head: { val: 0, next: null } };
  let curNode = result.head;
  let prevNode;

  while (sum || l1?.next || l2?.next || l1?.val || l2?.val) {
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;

    [curNode.val, sum] = [sum % 10, Math.floor(sum / 10)];
    curNode.next = new ListNode();
    prevNode = curNode;
    curNode = curNode.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (prevNode) prevNode.next = null;
  return result.head;
};
const l1 = {
  head: {
    val: 1,
    next: {
      val: 6,
      next: {
        val: 0,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

const l2 = {
  head: {
    val: 6,
    next: {
      val: 3,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null,
        },
      },
    },
  },
};
console.log(addTwoNumbers(l1.head, l2.head));
