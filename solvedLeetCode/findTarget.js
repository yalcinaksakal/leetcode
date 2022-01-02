var findTarget = function (root, k) {
	const vals = new Set();

	const dfs = r => {
		if (!r) return false;
		if (vals.has(r.val)) return true;
		vals.add(k - r.val);
		return dfs(r.left) || dfs(r.right);
	};
	return dfs(root);
};
