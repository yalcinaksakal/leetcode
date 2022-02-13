//   Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
	let max = 0;

	const traverse = (r = root, dir = 0, depth = 0) => {
		if (!r || (!r.left && !r.right)) {
			r && (max = Math.max(max, depth++));
			return;
		}
		traverse(r.left, -1, dir == -1 ? 1 : depth);
		traverse(r.right, 1, dir == 1 ? 1 : depth);
	};

	traverse();
	return max;
};
longestZigZag(
	new TreeNode(
		1,
		null,
		new TreeNode(
			1,
			new TreeNode(1),
			new TreeNode(
				1,
				new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1))),
				new TreeNode(1)
			)
		)
	)
);
