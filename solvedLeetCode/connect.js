/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) return root;

	root.next = null;
	let parents = [],
		children = [root],
		p,
		next,
		l;

	const pusher = node => {
		if (!node) return;
		l = children.length;
		if (l) children[l - 1].next = node;
		children.push(node);
	};

	while (children.length) {
		parents = [...children];
		children = [];
		l = 0;
		while (parents.length) {
			p = parents.shift();
			pusher(p.left);
			pusher(p.right);
		}
		if (l) children[l].next = null;
	}

	return root;
};
