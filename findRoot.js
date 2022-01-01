var lowestCommonAncestor = function (root, p, q) {
	const min = Math.min(p.val, q.val),
		max = Math.max(p.val, q.val);

	const findRoot = node =>
		node.val >= min && node.val <= max
			? node
			: findRoot(node.val < min ? node.left : node.right);

	return findRoot(root);
};
