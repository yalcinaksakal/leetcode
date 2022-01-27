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
	let xPos, yPos;

	const getDepth = (r, p, d) => {
		if (!r) return;
		if (r.val == x) xPos = { p, d };
		if (r.val == y) yPos = { p, d };
		if (xPos && yPos) return;
		getDepth(r.left, r.val, d + 1);
		getDepth(r.right, r.val, d + 1);
	};
	getDepth(root, null, 0);
	return xPos.p != yPos.p && xPos.d == yPos.d;
};
