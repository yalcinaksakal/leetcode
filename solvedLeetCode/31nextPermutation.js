// 31. Next Permutation
// Medium

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
// Example 4:

// Input: nums = [1]
// Output: [1]

var nextPermutation = function (nums) {
  length = nums.length;
  if (length < 2) return nums;
  let lastPeek = -1;
  for (i = length - 1; i > 0; i--)
    if (nums[i] > nums[i - 1]) {
      lastPeek = i;
      break;
    }
  if (lastPeek === -1) return nums.sort((a, b) => a - b);
  //check if lower peek exist on right side
  lowerPeek = lastPeek;
  for (i = length - 1; i > lastPeek; i--)
    if (nums[i] > nums[lastPeek - 1] && nums[i] <= nums[lowerPeek]) {
      lowerPeek = i;
      break;
    }
  //swap elements in lastPeek-1 with lowerPeek
  const temp = nums[lastPeek - 1];
  nums[lastPeek - 1] = nums[lowerPeek];
  nums[lowerPeek] = temp;
  //sort elements between [lastPeek,lentgh]
  nums
    .slice(lastPeek)
    .sort((a, b) => a - b)
    .forEach((element, index) => {
      nums[lastPeek + index] = element;
    });

  return nums;
};

console.log(nextPermutation([4, 6, 3, 2, 1]));
