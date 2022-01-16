/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function List(val, next) {
	this.val = val;
	this.next = next == undefined ? null : next;
}

var findTheWinner = function (n, k) {
	const head = new List(1);
	let cur = head;
	for (let i = 1; i < n; i++) {
		cur.next = new List(i + 1);
		cur = cur.next;
	}
	let prev = cur,
		removed = 0,
		move;
	cur.next = head;
	cur = head;
	//remove n-1 nodes
	n--;
	//move k-1 times
	k--;
	while (removed < n) {
		move = 0;
		while (move < k) {
			cur = cur.next;
			prev = prev.next;
			move++;
		}
		prev.next = cur.next;
		cur = cur.next;
		removed++;
	}
	return cur.val;
};
