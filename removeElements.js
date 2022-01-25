/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let prev = null,
		cur = head;
	while (cur) {
		if (cur.val == val) prev ? (prev.next = cur.next) : (head = cur.next);
		else prev = cur;
		cur = cur.next;
	}
	return head;
};
