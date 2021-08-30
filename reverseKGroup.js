// 25. Reverse Nodes in k-Group

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
// Example 3:

// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]
// Example 4:

// Input: head = [1], k = 1
// Output: [1]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

list = new ListNode(1);
current = list;
for (i = 2; i < 3; i++) {
  current.next = new ListNode(i);
  current = current.next;
}
let result = null;
const reverse = function (head, k, prev) {
  stack = [];
  current = head;
  while (stack.length < k && current) {
    stack.push(current);
    current = current.next;
  }
  if (stack.length !== k || (stack.length !== k && !current)) return;
  //reverse
  last = stack.pop();
  if (!result) result = last;
  if (prev) prev.next = last;
  while (last) {
    x = stack.pop();
    if (!x) break;
    last.next = x;
    last = x;
  }
  last.next = current;

  //recurse
  reverse(current, k, last);
};

const reverseKGroup = (head, k) => {
  result = null;
  reverse(head, k);
  return result ? result : head;
};

console.log(reverseKGroup(list, 2));
