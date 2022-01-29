function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var averageOfLevels = function (root) {
	const res = [];
	const q = [root];
	while (q.length) {
		const length = q.length;
		let sum = 0;
		q.push(null);
		while (q[0]) {
			root = q.shift();
			sum += root.val;
			if (root?.left) q.push(root.left);
			if (root?.right) q.push(root.right);
		}
		res.push(sum / length);
	}
	return res;
};

const a = new TreeNode(
	3,
	new TreeNode(9),
	new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
