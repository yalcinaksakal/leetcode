/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var canFinish = function (numCourses, prerequisites) {
	const mapC = {},
		mapP = {};
	for (const p of prerequisites) {
		mapC[p[0]] ? mapC[p[0]]++ : (mapC[p[0]] = 1);
		mapP[p[1]] ? mapP[p[1]].push(p[0]) : (mapP[p[1]] = [p[0]]);
	}

	const res = 0;

	const takeCourse = courses => {
		const next = [];

		for (const c of courses) {
			if (!mapC[c]) {
				res++;
				if (mapP[c])
					mapP[c].forEach(e => {
						if (mapC[e]) mapC[e]--;
					});
				continue;
			}
			next.push(c);
		}

		if (courses.length > next.length) takeCourse(next);
	};

	takeCourse(
		Array(numCourses)
			.fill()
			.map((_, i) => i)
	);

	return res === numCourses;
};
