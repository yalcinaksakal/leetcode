/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = [...nums].sort((a, b) => a - b);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let low = 0,
    mid = 0,
    high = this.nums.length;

  //find position
  while (low < high) {
    mid = (low + high) >>> 1;
    if (val > this.nums[mid]) low = mid + 1;
    else high = mid;
  }
  //insert new val
  this.nums.splice(low, 0, val);

  return this.nums[this.nums.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
