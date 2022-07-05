/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
	const mod = 10 ** 9 + 7,
		sell = itemsHigherThan => {
			const res = { count: 0, gain: 0 };
			let equals = 0,
				gain;
			for (const count of inventory) {
				if (count > itemsHigherThan) {
					gain =
						((((count + itemsHigherThan + 1) % mod) *
							(count - itemsHigherThan)) %
							mod) /
						2;
					res.count += count - itemsHigherThan;
					res.gain = (res.gain + gain) % mod;
				}
				count >= itemsHigherThan && equals++;
			}
			if (res.count > orders || res.count + equals < orders) return res;
			return {
				count: orders,
				gain: res.gain + (orders - res.count) * itemsHigherThan,
			};
		};
	let low = 0,
		mid,
		high = 10 ** 9,
		sold;
	while (true) {
		mid = (low + high) >>> 1;
		sold = sell(mid);
		if (sold.count > orders) low = mid + 1;
		else if (sold.count < orders) high = mid - 1;
		else return sold.gain;
	}
};
console.log(maxProfit([773160767], 252264991));
