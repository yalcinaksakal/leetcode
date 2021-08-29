// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const linkedList = new ListNode(0);
current = linkedList;
for (i = 1; i < 6; i++) {
  current.next = new ListNode(i);
  current = current.next;
}
const swapPairs = function (head) {
  const swap = (node, prevNode) => {
    if (!node.next) return;
    nextNode = node.next;
    if (prevNode) prevNode.next = nextNode;
    node.next = nextNode.next;
    nextNode.next = node;
    if (node.next) swap(node.next, node);
  };
  if (!head?.next || !head) return head;
  realHead = head.next;
  swap(head);
  return realHead;
};
console.log(swapPairs(linkedList));
