/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
	this.winner = [];
	this.times = times;

	const votes = {};
	let max = 0,
		win;
	for (const p of persons) {
		votes[p] ? votes[p]++ : (votes[p] = 1);
		if (votes[p] >= max) {
			max = votes[p];
			win = p;
			this.winner.push(p);
		} else this.winner.push(win);
	}
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
	let low = 0,
		mid,
		high = this.times.length - 1;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (this.times[mid] < t) low = mid + 1;
		else high = mid;
	}

	if (t < this.times[low]) low--;
	return this.winner[low];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
