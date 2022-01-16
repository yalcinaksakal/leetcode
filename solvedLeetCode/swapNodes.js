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
var swapNodes = function (head, k) {
	let cur = head;
	const nodes = [];

	while (cur) {
		nodes.push(cur);
		cur = cur.next;
	}

	if (nodes.length < 2) return head;

	const temp = nodes[k - 1].val;
	nodes[k - 1].val = nodes[nodes.length - k].val;
	nodes[nodes.length - k].val = temp;

	return head;
};
var swapNodes = function (head, k) {
	let cur = head,
		node1,
		node2 = head,
		index = 1;

	while (cur) {
		if (index == k) node1 = cur;
		if (index > k) node2 = node2.next;
		cur = cur.next;
		index++;
	}

	const temp = node1.val;
	node1.val = node2.val;
	node2.val = temp;

	return head;
};
