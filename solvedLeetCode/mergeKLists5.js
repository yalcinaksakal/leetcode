//   Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = function (listArr) {
	const lists = listArr.filter(l => l).sort((a, b) => b.val - a.val);
	const push = n => {
		let low = 0,
			high = lists.length - 1,
			mid;
		if (!lists.length || n.val < lists[high].val) {
			lists.push(n);
			return;
		}
		if (lists.length == 1) {
			lists.unshift(n);
			return;
		}
		while (low < high) {
			mid = (low + high) >>> 1;
			if (lists[mid].val > n.val) low = mid + 1;
			else high = mid;
		}
		lists.splice(low, 0, n);
	};

	const linker = small => {
		if (!small) return null;
		if (small.next) push(small.next);
		small.next = linker(lists.pop());
		return small;
	};

	return linker(lists.pop());
};
const a = new ListNode(1, new ListNode(2, new ListNode(3))),
	b = new ListNode(4, new ListNode(5, new ListNode(6)));

console.log(mergeKLists([a, b]));
