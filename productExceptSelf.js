var productExceptSelf = function (nums) {
  const prefix = [],
    postfix = [],
    result = [],
    n = nums.length;
  let pre = 1,
    post = 1;
  for (let i = 0; i < n; i++) {
    pre *= nums[i];
    post *= nums[n - i - 1];
    prefix.push(pre);
    postfix.unshift(post);
  }

  for (let i = 0; i < n; i++) {
    pre = i === 0 ? 1 : prefix[i - 1];
    post = i === n - 1 ? 1 : postfix[i + 1];
    result.push(pre * post);
  }

  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
