/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
	this.stack = [];
	this.size = maxSize;
	this.increments = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
	if (this.stack.length < this.size) this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
	return this.stack.length ? this.stack.pop() : -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
	k = Math.min(this.stack.length, k);
	for (let i = 0; i < k; i++) this.stack[i] += val;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
