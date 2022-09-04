/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
	const verticals = {},
		traverse = (node, row, column) => {
			if (!node) return;
			verticals[column]
				? verticals[column].push({ row, val: node.val })
				: (verticals[column] = [{ row, val: node.val }]);
			row++;
			traverse(node.left, row, column - 1);
			traverse(node.right, row, column + 1);
		};
	traverse(root, 0, 0);

	return Object.entries(verticals)
		.sort((a, b) => +a[0] - b[0])
		.map(column =>
			column[1]
				.sort((a, b) => {
					if (a.row < b.row || (a.row === b.row && a.val < b.val)) return -1;
					return 0;
				})
				.map(node => node.val)
		);
};
console.log(
	verticalTraversal(
		new TreeNode(
			3,
			new TreeNode(9),
			new TreeNode(20, new TreeNode(15), new TreeNode(7))
		)
	)
);
