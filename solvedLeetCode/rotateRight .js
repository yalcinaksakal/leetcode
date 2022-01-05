/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	const nodes = [];
	while (head) {
		nodes.push(head);
		head = head.next;
	}

	k %= nodes.length;

	if (!k) return nodes[0] ? nodes[0] : null;

	nodes[nodes.length - k - 1].next = null;
	nodes[nodes.length - 1].next = nodes[0];

	return nodes[nodes.length - k];
};
