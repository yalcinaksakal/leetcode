/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	if (!head) return head;
	let cur = head,
		less,
		lessHead,
		big,
		bigHead;

	while (cur) {
		if (cur.val < x) {
			if (!lessHead) lessHead = cur;
			else less.next = cur;
			less = cur;
		} else {
			if (!bigHead) bigHead = cur;
			else big.next = cur;
			big = cur;
		}
		cur = cur.next;
	}
	if (!less || !big) return head;
	big.next = null;
	less.next = bigHead;
	return lessHead;
};
