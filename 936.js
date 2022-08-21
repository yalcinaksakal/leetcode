/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */

/*
      SOLUTION:
      1- Try to find the last stamp position. Let stamp=abca, target=aabcacaaaaaaaabca
      2- Find max exact matching position for stamp
             abca
            aabcacaaaaaaaabca
      3- Mark this position as stamped
            a????caaaaaaaabca    stamped positions=[1];
      4- Repeat this process while we can find exact matching characters
                         abca
            a????caaaaaaa????    stamped positions=[13,1];
               abca
            a??????aaaaaa????    stamped positions=[3,13,1]; 
            abca
            ???????aaaaaa????    stamped positions=[0,3,13,1]; 
                abca      
            ????????aaaaa????    stamped positions=[4,0,3,13,1]; 
                 abca
            ?????????aaaa????    stamped positions=[5,4,0,3,13,1]; 
                  abca
            ??????????aaa????    stamped positions=[6,5,4,0,3,13,1]; 
                   abca
            ???????????aa????    stamped positions=[7,6,5,4,0,3,13,1]; 
                    abca
            ????????????a????    stamped positions=[8,7,6,5,4,0,3,13,1]; 
                     abca
            ?????????????????    stamped positions=[9,8,7,6,5,4,0,3,13,1];
      5- if target becomes full of ? return res else it is impossible to reach the target so return []
      
      If it was asked to find minimum number of stamps, the problem would be difficult.

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
		},
		res = [];

	while (true) {
		const nextStamp = getNextMove();
		if (!nextStamp.found) break;
		stampPos(nextStamp.pos);
	}
	return tagetChars.findIndex(el => el !== "?") === -1 ? res : [];
};
console.log(movesToStamp("abca", "aabcacaaaaaaaabca"));
// "aabcacaaaaaaaabca"
//  .xxxx........xxxx
