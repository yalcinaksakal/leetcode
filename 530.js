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
 * @return {number}
 */
var getMinimumDifference = function (root) {
	let range = 10 ** 5 + 1,
		res = range;
	const getMinMax = node => {
		if (!node) return [range, -range];
		const [leftMin, leftMax] = getMinMax(node.left),
			[rightMin, rightMax] = getMinMax(node.right);
		res = Math.min(res, node.val - leftMax, rightMin - node.val);
		return [Math.min(node.val, leftMin), Math.max(node.val, rightMax)];
	};
	getMinMax(root);
	return res;
};
