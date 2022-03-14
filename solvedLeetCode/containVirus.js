/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function (isInfected) {
	let dist = 0,
		regions,
		region,
		max = 1,
		walls = 0,
		index;
	const m = isInfected.length,
		n = isInfected[0].length,
		dir = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		],
		infect = (i, j) => {
			if (i === m || j === n || i < 0 || j < 0) return;
			if (!isInfected[i][j]) {
				region.walls++;
				region.infected[i + "," + j] = true;
				return;
			}
			if (isInfected[i][j] !== dist) return;
			region.prev.push([i, j]);
			isInfected[i][j] = dist + 1;
			for (const [x, y] of dir) infect(i + x, j + y);
		};
	while (max) {
		dist++;
		regions = [];
		max = 0;
		index = -1;
		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++)
				if (isInfected[i][j] === dist) {
					region = { prev: [], walls: 0, infected: {} };
					infect(i, j);
					const countInfected = Object.keys(region.infected).length;
					if (max < countInfected) {
						max = countInfected;
						index = regions.length;
					}
					regions.push({ ...region });
				}
		if (index === -1) continue;
		walls += regions[index].walls;
		for (let i = 0; i < regions.length; i++) {
			if (i === index)
				for (const [x, y] of regions[i].prev) isInfected[x][y] = dist;
			else
				for (let pos of Object.keys(regions[i].infected)) {
					pos = pos.split(",");
					isInfected[+pos[0]][+pos[1]] = dist + 1;
				}
		}
	}
	return walls;
};
console.log(
	containVirus([
		[0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
		[0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
		[0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
		[0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
		[0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
		[0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
		[1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
	])
);
