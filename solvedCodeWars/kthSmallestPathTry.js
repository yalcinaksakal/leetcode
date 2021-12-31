/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function (destination, k) {
	const [r, c] = destination;
	const path = [];

	let canContinue = true,
		res = 0;

	const walk = (x = 0, y = 0) => {
		if (x > r || y > c) return;

		if (x === r && y === c) {
			res++;
			if (res === k) {
				canContinue = false;
				res = path.join("");
			}
			return;
		}

		path.push("H");
		if (canContinue) walk(x, y + 1);
		path.pop();
		path.push("V");
		if (canContinue) walk(x + 1, y);
		path.pop();
	};

	walk();
	return res;
};
console.log(kthSmallestPath([2, 3], 1));


"HHHVV" 

"HHVHV" 
"HHVVH" 

"HVHHV" 
"HVHVH" 
"HVVHH" 

"VHHHV" 
"VHHVH" 
"VHVHH" 
"VVHHH" 

n*(n+1)/2=k