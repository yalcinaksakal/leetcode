/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
	const parent = {};

	const setParent = (c, p) => {
		if (parent[c]) return false;
		parent[c] = p;
		return true;
	};

	for (let i = 0; i < leftChild.length; i++)
		if (
			(leftChild[i] != -1 && !setParent(leftChild[i], i)) ||
			(rightChild[i] != -1 && !setParent(rightChild[i], i))
		)
			return false;
	let root = 0;
	for (let i = 0; i < leftChild.length; i++)
		if (parent[i] == undefined) {
			if (root) return false;
			root++;
		} else if (i == parent[parent[i]]) return false;

	return true;
};
validateBinaryTreeNodes(4, [1, 2, 0, -1], [-1, -1, -1, -1]);
