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
 * @return {string[][]}
 */
var printTree = function (root) {
	const getHeight = node =>
			node ? 1 + Math.max(getHeight(node.left), getHeight(node.right)) : 0,
		height = getHeight(root) - 1,
		m = height + 1,
		n = 2 ** m - 1,
		res = Array(m)
			.fill()
			.map(() => Array(n).fill("")),
		fillRes = (r, c, node) => {
			if (!node) return;
			res[r][c] = "" + node.val;
			const distToCenter = 2 ** (height - r - 1);
			fillRes(r + 1, c - distToCenter, node.left);
			fillRes(r + 1, c + distToCenter, node.right);
		};
	fillRes(0, (n - 1) / 2, root);
	return res;
};
