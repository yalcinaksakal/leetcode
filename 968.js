var minCameraCover = function (root) {
	const memo = {},
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
			return Math.min(
				leftCam + rightCam,
				leftCam + rightNoCam,
				leftNoCam + rightCam,
				mustChildCamInstalled ? 1001 : leftNoCam + rightNoCam
			);
		},
		installer = (node, nodeId, isCamAtParent, isCamAtNode) => {
			if (!node) return 0;
			if (!node.left && !node.right) return 1 - isCamAtParent;
			const key = nodeId + isCamAtParent + isCamAtNode,
				leftChildId = nodeId + "L",
				rightChildId = nodeId + "R";
			if (memo[key] !== undefined) return memo[key];
			memo[key] = isCamAtNode;
			if (!node.left || !node.right) {
				let child = installer(
					node.left ? node.left : node.right,
					node.left ? leftChildId : rightChildId,
					isCamAtNode,
					1
				);
				(isCamAtParent || isCamAtNode) &&
					(child = Math.min(
						child,
						installer(
							node.left ? node.left : node.right,
							node.left ? leftChildId : rightChildId,
							isCamAtNode,
							0
						)
					));
				memo[key] += child;
				return memo[key];
			}
			memo[key] += getPossibilities(
				node,
				leftChildId,
				rightChildId,
				isCamAtNode,
				!isCamAtNode && !isCamAtParent
			);
			return memo[key];
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
