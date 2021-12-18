/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var insertionSortList = function (head) {
	let sorted, curNode, prevNode;

	const insert = val => {
		if (!sorted) {
			sorted = new ListNode(val);
			return;
		}

		if (sorted.val >= val) {
			sorted = new ListNode(val, sorted);
			return;
		}

		prevNode = sorted;
		curNode = prevNode.next;
		let check = true;
		while (check) {
			if (curNode?.val > val || !curNode) {
				check = false;
				prevNode.next = new ListNode(val, curNode);
			} else {
				prevNode = curNode;
				curNode = prevNode.next;
			}
		}
	};

	while (head) {
		insert(head.val);
		head = head.next;
	}

	return sorted;
};
