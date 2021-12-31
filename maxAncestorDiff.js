//   Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const t = new TreeNode(
	8,
	new TreeNode(
		3,
		new TreeNode(1),
		new TreeNode(6, new TreeNode(4), new TreeNode(7))
	),
	new TreeNode(10, new TreeNode(14, new TreeNode(13)))
);
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = r => {
	let res = Math.abs(r.val - (r.left ? r.left.val : r.right.val));
	let val;

	const findMaxV = (v1, v2) =>
		Math.max(res, Math.abs(v1 - v2.min), Math.abs(v1 - v2.max));

	const getMinMax = r => {
		const vals = [r.val];

		const getVals = node => {
			val = getMinMax(node);
			res = findMaxV(r.val, val);
			vals.push(val.min, val.max);
		};

		if (r.left) getVals(r.left);
		if (r.right) getVals(r.right);

		return { min: Math.min(...vals), max: Math.max(...vals) };
	};

	getMinMax(r);

	return res;
};

console.log(t);
maxAncestorDiff(t);
