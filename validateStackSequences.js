/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	const n = pushed.length,
		arr = [];
	let i = 0,
		j = 0;
	while (i < n && j < n) {
		while (pushed[i] !== popped[j] && i < n) arr.push(pushed[i++]);
		if (i === n) return false;
		j++;
		i++;
		while (
			(arr[arr.length - 1] === popped[j] || pushed[i] === popped[j]) &&
			j < n
		)
			pushed[i] === popped[j++] ? i++ : arr.pop();
	}

	return !arr.length;
};
validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
