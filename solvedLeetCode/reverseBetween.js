/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	if (left === right) return head;

	let i = 1,
		cur = head,
		temp,
		start;

	if (left === 1) start = null;
	else
		while (i < left) {
			start = cur;
			cur = cur.next;
			i++;
		}

	const tail = cur;
	let revPrev = null;
	while (i <= right) {
		temp = cur.next;
		cur.next = revPrev;
		revPrev = cur;
		cur = temp;
		i++;
	}
	if (!start) head = revPrev;
	else start.next = revPrev;
	tail.next = cur;

	return head;
};
