var deleteDuplicates = function (head) {
	let next,
		cur = head;
	while (cur) {
		next = cur.next;
		while (next?.val === cur.val) next = next.next;
		cur.next = next;
		cur = next;
	}
	return head;
};
