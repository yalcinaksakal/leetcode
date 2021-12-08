/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};

  for (let i = 0; i < arr1.length; i++)
    if (map[arr1[i]]) map[arr1[i]].count++;
    else map[arr1[i]] = { count: 1, done: false };

  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]].done = true;
    for (let j = 0; j < map[arr2[i]].count; j++) result.push(arr2[i]);
  }

  const temp = [];
  for (const [key, value] of Object.entries(map)) {
    if (value.done) continue;

    for (let j = 0; j < value.count; j++) temp.push(+key);
  }

  result.push(...temp.sort((a, b) => a - b));
  return result;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
