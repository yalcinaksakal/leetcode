function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
	let res = root ? root.val : 0;

	const traverse = r => {
		if (!r) return 0;
		const left = traverse(r.left),
			right = traverse(r.right);
		const maxSingle = Math.max(Math.max(left, right) + r.val, r.val);
		res = Math.max(res, maxSingle, left + right + r.val);
		return maxSingle;
	};

	traverse(root);
	return res;
};

maxPathSum(
	new TreeNode(
		5,
		new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
		new TreeNode(8, new TreeNode(13, new TreeNode(1)), new TreeNode(4))
	)
);
