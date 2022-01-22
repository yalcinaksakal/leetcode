var FreqStack = function () {
	this.freq = {};
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
	this.freq[val] ? this.freq[val]++ : (this.freq[val] = 1);
	this.stack.push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
	let max = { i: -1, val: 0 };
	for (let i = this.stack.length - 1; i > -1; i--)
		if (this.freq[this.stack[i]] > max.val)
			max = { i, val: this.freq[this.stack[i]] };
	if (max.i == -1) return;
	this.freq[this.stack[max.i]]--;
	max.val = this.stack[max.i];
	this.stack.splice(max.i, 1);
	return max.val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
