/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
//similar to question 95
var allPossibleFBT = function (n) {
	const memo = {};

	const create = (n, s = 1) => {
		// n:end  s:start
		const key = s - n;
		if (memo[key]) return memo[key];
		memo[key] = [];

		if (s >= n) {
			memo[key].push(n === s ? new TreeNode(0) : null);
			return memo[key];
		}

		for (let i = s; i <= n; i++) {
			//allPossibleFBT(end,start)
			const left = create(i - 1, s);
			const right = create(n, i + 1);
			for (const l of left)
				for (const r of right)
					if (l && r) memo[key].push(new TreeNode(0, l, r));
		}

		return memo[key];
	};
	return create(n);
};
