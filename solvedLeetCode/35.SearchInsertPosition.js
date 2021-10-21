//
//basic
// var searchInsert = function (nums, target) {
//   if (!nums.length) return 0;
//   for (let i = 0; i < nums.length; i++) if (nums[i] >= target) return i;
//   return nums.length;
// };

//binary search
const searchInsert = function (nums, target) {
  if (!nums.length) return 0;
  const middle = Math.floor(nums.length / 2);

  if (nums[middle] === target) return middle;
  const isBig = nums[middle] > target;
  const next = searchInsert(
    isBig ? nums.slice(0, middle) : nums.slice(middle + 1),
    target
  );

  return next + (isBig ? 0 : middle + 1);
};

console.log(searchInsert([1, 3, 5, 7, 10], 8));
