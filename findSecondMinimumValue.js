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

var findSecondMinimumValue = function (root) {
	const min = root.val;
	const traverse = r => {
		if (!r) return min;
		if (r.val != min) return r.val;
		const left = traverse(r.left),
			right = traverse(r.right);
		if (left == min && right == min) return min;
		if (left == min) return right;
		if (right == min) return left;
		return Math.min(left, right);
	};
	const min2 = traverse(root);

	return min2 == min ? -1 : min2;
};

var findSecondMinimumValue1 = function (root) {
	let min1 = root.val,
		min2 = -1;

	const iot = r => {
		if (!r) return;
		iot(r.left);
		if (r.val != min1 && r.val != min2)
			if (r.val < min1) {
				min2 = min1;
				min1 = r.val;
			} else if (r.val < min2 || min2 == -1) min2 = r.val;

		iot(r.right);
	};
	iot(root);

	return min2;
};
