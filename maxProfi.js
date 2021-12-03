var maxProfit = function (prices) {
  let profit = null,
    temp;
  const n = prices.length;
  for (let i = 0; i < n - 1; i++) {
    temp = Math.max(...prices.slice(i + 1)) - prices[i];
    if (profit === null || profit < temp) profit = temp;
  }
  return profit > 0 ? profit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
