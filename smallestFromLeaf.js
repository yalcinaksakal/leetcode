/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
	let min = null;

	const traverse = (r = root, cur = "") => {
		cur = String.fromCharCode(97 + r.val) + cur;
		if (!r.left && !r.right) {
			if (min == null) min = cur;
			else if (min > cur) min = cur;
			return;
		}
		r.left && traverse(r.left, cur);
		r.right && traverse(r, right, cur);
	};
	traverse();
	return min;
};
