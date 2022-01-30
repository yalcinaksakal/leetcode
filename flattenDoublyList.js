/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
	const traverse = r => {
		while (r)
			if (r.child) {
				const next = r.next;
				r.next = r.child;
				r.child.prev = r;
				const tail = traverse(r.child);
				r.child = null;
				if (next) {
					next.prev = tail;
					tail.next = next;
					r = next;
				} else return tail;
			} else if (!r.next) return r;
			else r = r.next;
	};

	traverse(head);
	return head;
};
