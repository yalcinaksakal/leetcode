function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
	const memo = {},
		max = 1001,
		getPossibilities = (
			node,
			leftChildId,
			rightChildId,
			camAtNode,
			mustChildCamInstalled
		) => {
			const leftNoCamOnRight = installer(node.left, leftChildId, camAtNode, 0),
				leftCamOnRight = installer(node.left, leftChildId, camAtNode, 1),
				rightNoCamOnLeft = installer(node.right, rightChildId, camAtNode, 0),
				rightCamOnLeft = installer(node.right, rightChildId, camAtNode, 1);
			return (
				camAtNode +
				Math.min(
					leftCamOnRight + rightCamOnLeft,
					mustChildCamInstalled && !node.right
						? max
						: leftCamOnRight + rightNoCamOnLeft,
					mustChildCamInstalled && !node.left
						? max
						: leftNoCamOnRight + rightCamOnLeft,
					mustChildCamInstalled ? max : leftNoCamOnRight + rightNoCamOnLeft
				)
			);
		},
		installer = (node, nodeId, camAtParent, camAtSibling) => {
			if (!node) return 0;
			if (!node.left && !node.right) return 1 - camAtParent;
			const key = nodeId + camAtParent + camAtSibling,
				leftChildId = nodeId + "L",
				rightChildId = nodeId + "R";
			if (memo[key] !== undefined) return memo[key];
			//---install cam on this node
			memo[key] = getPossibilities(node, leftChildId, rightChildId, 1, false);
			//---do not install cam on this node
			memo[key] = Math.min(
				memo[key],
				getPossibilities(
					node,
					leftChildId,
					rightChildId,
					0,
					!camAtParent && !camAtSibling
				)
			);

			return memo[key];
		};
	return installer(root, "", 1, 0);
};
minCameraCover(
	new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)))
);
