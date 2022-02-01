/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
	constructor(comparator = (a, b) => a > b) {
		this._heap = [];
		this._comparator = comparator;
	}
	get size() {
		return this._heap.length;
	}
	push(...values) {
		values.forEach(value => {
			this._heap.push(value);
			this._siftUp();
		});
	}
	pop() {
		const poppedValue = this._heap[top];
		const bottom = this.size - 1;
		if (bottom > top) {
			this._swap(top, bottom);
		}
		this._heap.pop();
		this._siftDown();
		return poppedValue;
	}
	_greater(i, j) {
		return this._comparator(this._heap[i], this._heap[j]);
	}
	_swap(i, j) {
		[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
	}
	_siftUp() {
		let node = this.size - 1;
		while (node > top && this._greater(node, parent(node))) {
			this._swap(node, parent(node));
			node = parent(node);
		}
	}
	_siftDown() {
		let node = top;
		while (
			(left(node) < this.size && this._greater(left(node), node)) ||
			(right(node) < this.size && this._greater(right(node), node))
		) {
			let maxChild =
				right(node) < this.size && this._greater(right(node), left(node))
					? right(node)
					: left(node);
			this._swap(node, maxChild);
			node = maxChild;
		}
	}
	get avg() {
		return this._heap.reduce((a, c) => a + c[0] / c[1], 0) / this.size;
	}
}

var maxAverageRatio = function (cl, extraStudents) {
	const getDif = (x, y) => (x + 1) / (y + 1) - x / y;
	const que = new PriorityQueue((a, b) => getDif(...a) > getDif(...b));
	que.push(...cl);

	const dfs = (s = extraStudents) => {
		if (!s) return que.avg;
		const c = que.pop();
		c[0]++;
		c[1]++;
		que.push(c);
		return dfs(s - 1);
	};

	return dfs();
};
console.log(
	maxAverageRatio(
		[
			[1, 2],
			[3, 5],
			[2, 2],
		],

		2
	)
);
