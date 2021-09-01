
let mergedList = [];
const mergeLists = function (listArr) {
  //filter empty lists

  filteredList = listArr.filter(list => list.length);
  if (!filteredList.length) return;
  //find min
  min = Math.min(...filteredList.map(list => list[0]));
  minList = filteredList.findIndex(list => list[0] === min);
  filteredList[minList].shift();
  mergedList.push(min);
  mergeLists(filteredList);
};
const mergeKLists = function (lists) {
  mergedList = [];
  mergeLists(lists);
  return mergedList;
};
console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6], [], [1]]));
