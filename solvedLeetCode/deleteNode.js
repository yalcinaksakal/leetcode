//   Definition for a binary tree node.
function TreeNode(val, right, left) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	const getMinNode = (min, parent) =>
		min.left ? getMinNode(min.left, min) : { min, parent };

	const delNode = (n, p) => {
		if (!p && !n.right) {
			root = n.left ? n.left : null;
			return;
		}

		if (n.right) {
			const { min, parent } = getMinNode(n.right, n);
			n.val = min.val;
			if (parent == n) n.right = min.right;
			else parent.left = min.right;
			if (!p) root = n;
			return;
		}
		p.val > n.val ? (p.left = n.left) : (p.right = n.left);
	};

	const find = (r, p) => {
		if (!r) return { n: false, p: null };
		return r.val == key ? { n: r, p } : find(r.val < key ? r.right : r.left, r);
	};

	if (root) {
		const { n, p } = find(root, null);
		n && delNode(n, p);
	}
	return root;
};

console.log(deleteNode(new TreeNode(0), 0));
