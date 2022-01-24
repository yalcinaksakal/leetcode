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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
	let paths = [],
		max = 0;

	const traverse = (r, path) => {
		if (!r) return;
		const curPath = [...path, r];
		if (!r.left && !r.right && curPath.length >= max) {
			paths.push(curPath);
			max = curPath.length;
			return;
		}
		traverse(r.left, curPath);
		traverse(r.right, curPath);
	};

	traverse(root, []);
	paths = paths.filter(p => p.length == max);
	let ancestor = null,
		check,
		val;
	for (let i = 0; i < max; i++) {
		check = true;
		val = paths[0][i].val;
		for (let j = 1; j < paths.length; j++) {
			if (paths[j][i].val != val) {
				check = false;
				break;
			}
		}
		if (check) ancestor = paths[0][i];
	}
	return ancestor;
};
