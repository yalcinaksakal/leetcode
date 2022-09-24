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

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

function PriorityQueue(comparator) {
	//...
	//For js pq :     https://myleetcode.vercel.app/editor?type=open&no=1439
}

var kthSmallest = function (matrix, k) {
	const pq = new PriorityQueue(),
		removePeek = val => {
			if (val >= pq.peek()) return;
			pq.poll();
			pq.add(val);
		};
	for (const row of matrix)
		for (const cell of row) pq.size < k ? pq.add(cell) : removePeek(cell);
	return pq.peek();
};
