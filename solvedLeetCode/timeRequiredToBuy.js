/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

function List(val, next) {
	this.val = val;
	this.next = next == undefined ? null : next;
}

var timeRequiredToBuy = function (tickets, k) {
	let time = 0;
	const head = new List(tickets[0]);
	let cur = head,
		target;

	for (let i = 0; i < tickets.length - 1; i++) {
		if (i == k) target = cur;
		cur.next = new List(tickets[i + 1]);
		cur = cur.next;
	}
	if (k == tickets.length - 1) target = cur;
	cur.next = head;

	while (target.val) {
		time++;
		--cur.next.val ? (cur = cur.next) : (cur.next = cur.next.next);
	}
	return time;
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
