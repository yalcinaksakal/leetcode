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
var distributeCoins = function (root) {
	let count = 0;

	const traverse = r => {
		if (!r) return 0;
		for (const c of [r.left, r.right]) r.val += traverse(c);
		count += Math.abs(1 - r.val);
		return r.val - 1;
	};

	traverse(root);
	return count;
};

console.log(distributeCoins(new TreeNode(3, new TreeNode(0), new TreeNode(0))));
