const nums = [2, 0, 2, 1, 1, 0];
var sortColors = function (nums) {
  const colors = [0, 0, 0],
    result = [];
  let temp;
  while (nums.length) {
    temp = nums.shift();
    colors[temp]++;
  }
  console.log(nums);
  for (let i = 0; i < colors.length; i++)
    nums.push(...Array(colors[i]).fill(i));
};

sortColors(nums);
console.log(nums);
