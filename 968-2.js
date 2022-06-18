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
			const leftCam = installer(node.left, leftChildId, camAtNode, 1),
				leftNoCam = installer(node.left, leftChildId, camAtNode, 0),
				rightCam = installer(node.right, rightChildId, camAtNode, 1),
				rightNoCam = installer(node.right, rightChildId, camAtNode, 0);
			return (
				camAtNode +
				Math.min(
					leftCam + rightCam,
					mustChildCamInstalled && !node.left ? max : leftCam + rightNoCam,
					mustChildCamInstalled && !node.right ? max : leftNoCam + rightCam,
					mustChildCamInstalled ? max : leftNoCam + rightNoCam
				)
			);
		},
		installer = (node, nodeId, isCamAtParent, isCamAtNode) => {
			if (!node) return 0;
			if (!node.left && !node.right) return 1 - isCamAtParent;
			const key = nodeId + isCamAtParent + isCamAtNode,
				leftChildId = nodeId + "L",
				rightChildId = nodeId + "R";
			if (memo[key] !== undefined) return memo[key];
			return (memo[key] = getPossibilities(
				node,
				leftChildId,
				rightChildId,
				isCamAtNode,
				!isCamAtNode && !isCamAtParent
			));
		};
	return Math.min(installer(root, "", 0, 0), installer(root, "", 0, 1));
};
minCameraCover(
	new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)))
);
console.log(
	minCameraCover(
		new TreeNode(
			0,
			new TreeNode(0, new TreeNode(0, new TreeNode(0, new TreeNode(0))))
		)
	)
);
