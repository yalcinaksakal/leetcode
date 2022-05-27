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
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
	const n = nums.length / 3,
		buildMaxMinArrays = (start, dir, comparator) => {
			let sum = 0,
				peek;
			const pq = new PriorityQueue(comparator),
				minMaxSum = [],
				index = dir === 1 ? 0 : 2 * n,
				add = num => {
					sum += num - pq.poll();
					pq.add(num);
				};
			for (let i = index; i - index < n; i++) {
				pq.add(nums[i]);
				sum += nums[i];
			}
			for (let i = start; Math.abs(i - start) <= n; i += dir) {
				minMaxSum.push(sum);
				peek = pq.peek();
				dir === 1
					? nums[i] < peek && add(nums[i])
					: nums[i] > peek && add(nums[i]);
			}
			dir === -1 && minMaxSum.reverse();
			return minMaxSum;
		},
		minSum = buildMaxMinArrays(n, 1),
		maxSum = buildMaxMinArrays(2 * n - 1, -1, (a, b) => a < b);
	return maxSum.reduce(
		(acc, cur, i) => Math.min(acc, minSum[i] - cur),
		minSum[0] - maxSum[0]
	);
};
//add first n elements to pq for minSum
//add last n elements to pq for maxSum
//find initial sum as sum of added elements
//find minSum of n elements before index i and push it to minSum arr
//find maxSum of n elements after index i and unshift it to maxSum arr
//peek is max for dir=1, min for dir=-1
//while finding minsum, if cur item is less than max we should remove max and add cur
//while finding maxsum, if cur item is bigger than min we should remove min and add cur
//instead of unshifting an element into arr each time, reverse the array at the end.
//return min of minsum[i]-maxsum[i]
console.log(minimumDifference([3, 1, 2]));
