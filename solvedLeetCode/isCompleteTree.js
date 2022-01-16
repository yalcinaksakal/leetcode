/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
	const stack = [root];
	let node;

	while (stack[0]) {
		node = stack.shift();
		stack.push(node.left, node.right);
	}

	for (let i = 0; i < stack.length; i++) if (stack[i]) return false;
	return true;
};

const t = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, undefined, new TreeNode(7))
);

isCompleteTree(t);
