// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const sampleHead = new ListNode(0);
current = sampleHead;
[1, 2, 3, 4, 5, 6].forEach(el => {
  current.next = new ListNode(el);
  current = current.next;
});

var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  headOfNodeTobeDeleted = null;
  orderOfHeadOfNodeTobeDeleted = 0;
  currentNode = head;
  while (currentNode) {
    if (orderOfHeadOfNodeTobeDeleted < n) orderOfHeadOfNodeTobeDeleted++;
    else
      headOfNodeTobeDeleted = !headOfNodeTobeDeleted
        ? head
        : headOfNodeTobeDeleted.next;
    currentNode = currentNode.next;
  }
  if (!headOfNodeTobeDeleted) return head.next;
  headOfNodeTobeDeleted.next = headOfNodeTobeDeleted.next
    ? headOfNodeTobeDeleted.next.next
    : null;
  return head;
};
console.log(removeNthFromEnd(sampleHead, 7));
