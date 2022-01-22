// Definition for a Node.
function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) return root;

	let nodes = [root, "#"],
		p;

	const connector = node => {
		const l = nodes.length - 1;
		if (nodes[l] != "#") nodes[l].next = node;
		nodes.push(node);
	};

	while (nodes[0]) {
		p = nodes.shift();
		if (p == "#") {
			if (nodes[0]) nodes.push("#");
			continue;
		}
		p.left && connector(p.left);
		p.right && connector(p.right);
	}

	return root;
};
console.log(
	connect(
		new Node(
			1,
			new Node(2, new Node(4), new Node(5)),
			new Node(3, new Node(6), new Node(7))
		)
	)
);
