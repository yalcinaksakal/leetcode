// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = new ListNode(7);
let cur = l1;
[2, 4, 3].forEach(val => {
  cur.next = new ListNode(val);
  cur = cur.next;
});

const l2 = new ListNode(5);
cur = l2;
[6, 4].forEach(val => {
  cur.next = new ListNode(val);
  cur = cur.next;
});

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var add10Numbers = function (...lists) {
  //up to 10 lists
  const stack = [];
  let maxLength = 0;
  const listToStack = list => {
    index = stack.length;
    stack[index] = [];
    while (list) {
      stack[index].unshift(list.val);
      list = list.next;
    }
    maxLength =
      stack[index].length > maxLength ? stack[index].length : maxLength;
  };
  for (const list of lists) listToStack(list);

  numberofLists = stack.length;
  const result = [];
  let digit = 0;
  for (i = 0; i < maxLength; i++) {
    for (j = 0; j < numberofLists; j++) if (stack[j][i]) digit += stack[j][i];
    result.push(digit % 10);
    digit = Math.floor(digit / 10);
  }
  if (digit) result.push(digit);
  result.reverse();
  const head = new ListNode(result[0]);
  let cur = head;
  for (i = 0; i < result.length - 1; i++) {
    cur.next = new ListNode(result[i + 1]);
    cur = cur.next;
  }
  return head;
};
console.log(add10Numbers(l1, l2));
