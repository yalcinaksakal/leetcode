/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
	const assignJob = (curWorker, curJob, prevMaxLoad, curLoad) => {
		if (curJob === jobs.length) return Math.max(prevMaxLoad, curLoad);

		//assign curjob to curworker
		const assign = assignJob(
			curWorker,
			curJob + 1,
			prevMaxLoad,
			curLoad + jobs[curJob]
		);
		//if curworker hasn't work yet we dont need to skip him
		//or if there isnt any worker left we cant skip curworker
		//else return min of assigning curjob to curworker or nextworker
		return curLoad && curWorker < k
			? Math.min(
					assign,
					assignJob(curWorker + 1, curJob, Math.max(prevMaxLoad, curLoad), 0)
			  )
			: assign;
	};
	return assignJob(1, 0, 0, 0);
};
console.log(minimumTimeRequired([3, 2, 3], 3));
