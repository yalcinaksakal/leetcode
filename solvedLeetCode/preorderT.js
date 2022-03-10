/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	const stack = [],
		res = [];

	while (root) {
		res.push(root.val);
		if (root.children) stack.push(...root.children.reverse());
		root = stack.pop();
	}

	return res;
};

var preorderRec = function (root) {
	const res = [],
		pot = r => {
			if (!r) return;
			res.push(r.val);
			r.children.forEach(c => pot(c));
		};
	pot(root);
	return res;
};
