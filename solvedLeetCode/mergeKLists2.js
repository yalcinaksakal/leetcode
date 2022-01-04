const mergeKLists = function (listArr) {
	listArr = listArr.filter(l => l).sort((a, b) => a.val - b.val);

	if (!listArr.length) return null;

	const linker = (small, lists) => {
		if (small.next) lists.push(small.next);
		small.next = mergeKLists(lists);
		return small;
	};

	return linker(listArr.shift(), listArr);
};

console.log([null, null, null, 4, -5].filter(l => l).sort((a, b) => a - b));
