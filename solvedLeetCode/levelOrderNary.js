/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	let parents = [root],
		p;
	const res = [[root.val]];

	while (parents.length) {
		const children = [];
		for (let i = 0; i < parents.length; i++) {
			p = parents[i];
			p.children.length && children.push(...p.children);
		}
		children.length && res.push(children.map(c => c.val));
		parents = children;
	}
	return res;
};
