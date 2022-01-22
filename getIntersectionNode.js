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
	let a = headA,
		b = headB;
	while (a != b) {
		if (!a) a = headB;
		if (!b) b = headA;
		a = a.next;
		b = b.next;
	}

	return a;
};
