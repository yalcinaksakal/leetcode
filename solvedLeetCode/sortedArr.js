function sortedIndex(array, value) {
  var low = 0,
    high = array.length;

  while (low < high) {
    var mid = (low + high) >>> 1;
    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }
  return low;
}
const arr = [1, 1];
arr.splice(sortedIndex(arr, 1.4), 0, 1.4);
console.log(arr);
console.log(sortedIndex(arr, 6));
arr.splice(5, 0, 6);
console.log(arr);
