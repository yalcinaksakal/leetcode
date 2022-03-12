/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	let i = 0;
	const nodes = [],
		randoms = [],
		copy = n => {
			if (!n) return null;
			const node = new Node(n.val, copy(n.next), null);
			n.val = i++;
			nodes.push(node);
			return node;
		},
		getRandoms = n => {
			if (!n) return;
			randoms.unshift(n.random == null ? null : n.random.val);
			getRandoms(n.next);
		},
		clone = copy(head);

	getRandoms(head);
	for (i = 0; i < nodes.length; i++)
		if (randoms[i] != null) nodes[i].random = nodes[randoms[i]];

	return clone;
};
