/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	const nodes = [];
	let pParents, qParents;
	const getParents = r => {
		if (!r) return;
		nodes.push(r);

		if (r == p) pParents = [...nodes];
		if (r == q) qParents = [...nodes];
		if (p && q) return;
		r.left && getParents(r.left);
		r.right && getParents(r.right);
		nodes.pop();
	};

	getParents(root);
	console.log(qParents, pParents);
};
