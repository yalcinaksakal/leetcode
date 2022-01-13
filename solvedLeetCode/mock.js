/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
	const map = {};
	let sd;

	cpdomains.forEach(cp => {
		let [count, d] = cp.split(" ");
		count = +count;
		d = d.split(".");
		while (d[0]) {
			sd = d.join(".");
			map[sd] = map[sd] ? map[sd] + count : count;
			d.shift();
		}
	});

	return Object.entries(map).map(([d, c]) => `${c} ${d}`);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	const map = {};

	for (const num of nums) {
		if (map[num]) return num;
		map[num] = 1;
	}
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
	if (!root1 && !root2) return null;
	if (!root1) root1 = new TreeNode(root2.val);
	else root1.val += root2 ? root2.val : 0;

	root1.left = mergeTrees(root1.left, root2 ? root2.left : null);
	root1.right = mergeTrees(root1.right, root2 ? root2.right : null);

	return root1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
	const m = grid.length,
		n = grid[0].length;

	const visit = (i, j) => {
		if (i < 0 || j < 0 || i == m || j == n || grid[i][j]) return;
		if (!i || !j || i == m - 1 || j == n - 1) isIsland = false;
		grid[i][j] = 1;
		[
			[i + 1, j],
			[i - 1, j],
			[i, j + 1],
			[i, j - 1],
		].forEach(dir => visit(...dir));
	};

	let res = 0,
		isIsland;

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			if (!grid[i][j]) {
				isIsland = true;
				visit(i, j);
				if (isIsland) res++;
			}

	return res;
};
