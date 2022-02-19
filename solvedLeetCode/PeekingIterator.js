/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
	this.it = iterator;
	this.cur = this.it.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
	return this.cur;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
	const val = this.cur;
	this.cur = this.it.hasNext() ? this.it.next() : null;
	return val;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
	return this.cur !== null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
