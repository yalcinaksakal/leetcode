/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
	this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
	let cur = this.head,
		i = 1,
		res = 0;
	while (cur) {
		if (Math.random() < 1 / i) res = cur.val;
		i++;
		cur = cur.next;
	}
	return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
