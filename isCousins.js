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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
	let xp, xd, yp, yd;

	const getDepth = (r, p, d) => {
		if (!r) return;
		if (r.val == x) {
			xp = p;
			xd = d;
		}
		if (r.val == y) {
			yp = p;
			yd = d;
		}
		if (xp && yp) return;
		getDepth(r.left, r.val, d + 1);
		getDepth(r.right, r.val, d + 1);
	};
	getDepth(root, -1, 0);
	return xp != yp && xd == yd;
};
