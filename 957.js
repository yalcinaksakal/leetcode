/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
// var prisonAfterNDays = function (cells, n) {
//   if (!n) return cells;
//   const nextday = [...cells];
//   for (let i = 0; i < cells.length; i++)
//     nextday[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
//   return prisonAfterNDays(nextday, n - 1);
// };

var prisonAfterNDays = function (cell, k) {
  if (!k) return cell;
  const map = {};
  let nextDay,
    cells = cell.join(""),
    n = k,
    index = 0;
  map["0"] = { index: 0, nextDay: cells };
  while (n) {
    if (map[cells]) break;
    n--;
    index++;
    nextDay = "00000000".split("");
    for (let i = 1; i < 7; i++)
      nextDay[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    nextDay = nextDay.join("");
    map[cells] = { nextDay, index };
    cells = nextDay;
  }

  if (k > index) {
    const mod = index - map[cells].index + 1;

    k -= map[cells].index - 1;
    k %= mod;
    k += map[cells].index - 1;
  }

  return Object.values(map)
    .filter(v => v.index === k)[0]
    .nextDay.split("")
    .map(ch => +ch);
};

console.log(prisonAfterNDays([0, 0, 0, 1, 1, 0, 1, 0], 574));
