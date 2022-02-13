//  Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	const paths = [],
		traverse = (r, p) => {
			p += r.val;
			if (!r.left && !r.right) paths.push(p);
			else {
				p += "->";
				if (r.left) traverse(r.left, p);
				if (r.right) traverse(r.right, p);
			}
		};
	traverse(root, "");
	return paths;
};

binaryTreePaths(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
