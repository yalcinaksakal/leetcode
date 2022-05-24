/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
	//sort edges by their weight (Kruskal algorithm Step 1) start from lowest weighted edge, if it does not result in circle include it to MST
	edges.forEach((edge, i) => edge.push(i));
	edges.sort((a, b) => a[2] - b[2]);
	let roots = {};
	const pseudos = new Set(),
		criticals = new Set(),
		find = v => {
			roots[v] === undefined && (roots[v] = v);
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => {
			const p1 = find(u),
				p2 = find(v);
			if (p1 !== p2) {
				roots[p2] = roots[p1];
				//roots are different, no circulation
				return false;
			}
			//roots are same,circle, don't include this edge to MST
			return true;
		},
		mst = excludedEdge => {
			roots = {};
			let weight = 0;
			const mstEdges = new Set();
			for (let i = 0; i < edges.length; i++) {
				//if including cur edge results in circle dont include it in MST (Kruskal algorithm Step 2)
				if (i === excludedEdge || union(edges[i][0], edges[i][1])) continue;
				weight += edges[i][2];
				mstEdges.add(i);
			}
			return { mstEdges, weight };
		},
		getMstWeightStartingFromAnEdge = start => {
			roots = {};
			let weight = edges[start][2];
			union(edges[start][0], edges[start][1]);
			for (let i = 0; i < edges.length; i++) {
				if (i === start || union(edges[i][0], edges[i][1])) continue;
				weight += edges[i][2];
			}
			return weight;
		},
		{ mstEdges: initialMst, weight: minWeight } = mst(-1); //include all edges to find real MST (Pass index of edge which is to be excluded, pass -1 for no exculusion)
	//if excluding an edge of initialMst results in minweight, it is not critical, it is pseudo
	initialMst.forEach(edge => {
		const { mstEdges, weight } = mst(edge);
		if (weight === minWeight) {
			mstEdges.forEach(
				newEdge => !initialMst.has(newEdge) && pseudos.add(newEdge)
			);
			pseudos.add(edge);
		} else criticals.add(edge);
	});
	//there might be edges which are not included  in initialMst and starting from them might have same minweight
	for (let i = 0; i < edges.length; i++) {
		if (criticals.has(i) || pseudos.has(i)) continue;
		getMstWeightStartingFromAnEdge(i) === minWeight && pseudos.add(i);
	}
	return [
		Array.from(criticals).map(c => edges[c][3]),
		Array.from(pseudos).map(p => edges[p][3]),
	];
};

console.log(
	findCriticalAndPseudoCriticalEdges(4, [
		[0, 1, 1],
		[0, 3, 1],
		[0, 2, 1],
		[1, 2, 1],
		[1, 3, 1],
		[2, 3, 1],
	])
);
// console.log(
// 	findCriticalAndPseudoCriticalEdges(5, [
// 		[0, 1, 1],
// 		[1, 2, 1],
// 		[2, 3, 2],
// 		[0, 3, 2],
// 		[0, 4, 3],
// 		[3, 4, 3],
// 		[1, 4, 6],
// 	])
// );
