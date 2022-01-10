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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
	const check = (r, s) => {
		if (!r && !s) return true;
		if (!r || !s || r.val !== s.val) return false;
		return check(r.left, s.left) && check(r.right, s.right);
	};
	let res = check(root, subRoot);
	if (!res && root.left) res = isSubtree(root.left, subRoot);
	if (!res && root.right) res = isSubtree(root.right, subRoot);
	return res;
};
var isSubtree1 = function (root, subRoot) {
	const traverse = root => {
		let res = "";
		const stack = [];

		while (stack.length || root) {
			res += `,${root ? root.val : "."}`;
			if (root) {
				stack.push(root);
				root = root.left;
			} else root = stack.pop().right;
		}
		res += ",.";
		return res;
	};

	return traverse(root).includes(traverse(subRoot));
};
