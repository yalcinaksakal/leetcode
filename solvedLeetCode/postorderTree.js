/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
	const stack = [],
		res = [];

	while (root) {
		res.push(root.val);
		root.children.forEach(c => c && stack.push(c));
		root = stack.pop();
	}

	return res.reverse();
};
