/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
	const tagetChars = [...target],
		lastPossibleIndex = target.length - stamp.length,
		placedPositions = {},
		isMatch = index => {
			let exact = 0;
			for (let i = 0; i < stamp.length; i++) {
				if (tagetChars[index + i] === "?") continue;
				if (tagetChars[index + i] === stamp[i]) exact++;
				else return false;
			}
			return exact;
		},
		getNextMove = () => {
			let maxMatch = 0,
				matchPos = 0;
			for (let i = 0; i <= lastPossibleIndex; i++) {
				if (!placedPositions[i]) {
					const matchStatus = isMatch(i);
					if (matchStatus > maxMatch) {
						maxMatch = matchStatus;
						matchPos = i;
						if (maxMatch === stamp.length) break;
					}
				}
			}
			return { found: maxMatch ? true : false, pos: matchPos };
		},
		stampPos = index => {
			for (let i = index; i < index + stamp.length; i++) tagetChars[i] = "?";
			placedPositions[index] = true;
			res.unshift(index);
		};
	res = [];
	let isMatchFound = true;
	while (isMatchFound) {
		const nextStamp = getNextMove();
		isMatchFound = nextStamp.found;
		isMatchFound && stampPos(nextStamp.pos);
	}
	return tagetChars.findIndex(el => el !== "?") === -1 ? res : [];
};

// "aabcacaaaaaaaabca"
//  .xxxx........xxxx
