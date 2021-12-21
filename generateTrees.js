// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n, s = 1) {
	const list = [];
	if (s >= n) {
		list.push(s === n ? new TreeNode(s) : null);
		return list;
	}

	for (let i = s; i <= n; i++) {
		//generateTrees(end,start)
		const left = generateTrees(i - 1, s);
		const right = generateTrees(n, i + 1);
		for (const l of left)
			for (const r of right) list.push(new TreeNode(i, l, r));
	}

	return list;
};
console.log(generateTrees(13));
