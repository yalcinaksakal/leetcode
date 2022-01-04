/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let cur = head,
		prev = null,
		next;

	while (cur) {
		next = cur.next;
		if (cur.val === next?.val) {
			while (next?.val === cur.val) next = next.next;
			prev ? (prev.next = next) : (head = next);
			cur = next;
		} else {
			prev = cur;
			cur = cur.next;
		}
	}

	return head;
};
