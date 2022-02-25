const jimOrders = orders =>
	orders
		.map((o, i) => ({ i, p: o[0] + o[1] }))
		.sort((a, b) => a.p - b.p)
		.map(o => +o.i + 1);
