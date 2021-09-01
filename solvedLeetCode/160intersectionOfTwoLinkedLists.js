/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  const length = head => {
    let l = 0;
    while (head) {
      head = head.next;
      l++;
    }
    return l;
  };
  const move = (head, step) => {
    while (step > 0) {
      head = head.next;
      step--;
    }
    return head;
  };
  const lengthA = length(headA);
  const lengthB = length(headB);
  const dif = Math.abs(lengthA - lengthB);
  lengthA > lengthB ? (headA = move(headA, dif)) : (headB = move(headB, dif));
  let skip = 0;
  while (headA !== headB) {
    console.log(headA, headB);
    if (!headA || !headB) return null;
    skip++;
    headA = headA.next;
    headB = headB.next;
  }

    const skipA = lengthA > lengthB ? dif + skip : skip;
    const skipB = lengthB > lengthA ? dif + skip : skip;
  
  return headA;
};
console.log(getIntersectionNode(headA, headB));
/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.

 

Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 

Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 

Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
*/
