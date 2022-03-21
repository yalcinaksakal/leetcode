"use strict";

function PriorityQueue(comparator) {
	if (!(this instanceof PriorityQueue)) return new PriorityQueue(comparator);
	this.array = [];
	this.size = 0;
	this.compare = comparator || ((a, b) => a > b);
}

PriorityQueue.prototype.add = function (myval) {
	var i = this.size;
	this.array[this.size] = myval;
	this.size += 1;
	var p;
	var ap;
	while (i > 0) {
		p = (i - 1) >> 1;
		ap = this.array[p];
		if (!this.compare(myval, ap)) {
			break;
		}
		this.array[i] = ap;
		i = p;
	}
	this.array[i] = myval;
};

// for internal use
PriorityQueue.prototype._percolateUp = function (i, force) {
	var myval = this.array[i];
	var p;
	var ap;
	while (i > 0) {
		p = (i - 1) >> 1;
		ap = this.array[p];
		// force will skip the compare
		if (!force && !this.compare(myval, ap)) {
			break;
		}
		this.array[i] = ap;
		i = p;
	}
	this.array[i] = myval;
};

// for internal use
PriorityQueue.prototype._percolateDown = function (i) {
	var size = this.size;
	var hsize = this.size >>> 1;
	var ai = this.array[i];
	var l;
	var r;
	var bestc;
	while (i < hsize) {
		l = (i << 1) + 1;
		r = l + 1;
		bestc = this.array[l];
		if (r < size) {
			if (this.compare(this.array[r], bestc)) {
				l = r;
				bestc = this.array[r];
			}
		}
		if (!this.compare(bestc, ai)) {
			break;
		}
		this.array[i] = bestc;
		i = l;
	}
	this.array[i] = ai;
};

PriorityQueue.prototype.peek = function () {
	if (this.size == 0) return undefined;
	return this.array[0];
};

PriorityQueue.prototype.poll = function () {
	if (this.size == 0) return undefined;
	var ans = this.array[0];
	if (this.size > 1) {
		this.array[0] = this.array.pop();
		this.size--;
		this._percolateDown(0);
	} else this.size -= 1;

	return ans;
};

var FreqStack = function () {
	this.freq = {};
	this.stack = new PriorityQueue((a, b) => {
		if (a.freq > b.freq) return true;
		if (a.freq === b.freq && a.index > b.index) return true;
		return false;
	});
	this.count = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
	this.freq[val] ? this.freq[val]++ : (this.freq[val] = 1);
	this.stack.add({ val, freq: this.freq[val], index: this.count++ });
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
	const pop = this.stack.poll().val;
	this.freq[pop]--;
	return pop;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

const stack = new FreqStack();
stack.push(5);
stack.push(7);
stack.push(5);
stack.push(7);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
