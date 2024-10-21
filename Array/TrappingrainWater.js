var trap = function (height) {
  const lr = [],
    rl = [];
  let largestl = -1,
    largestr = -1;
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    largestl = Math.max(height[i], largestl);
    lr.push(largestl);
    largestr = Math.max(height[height.length - 1 - i], largestr);
    rl.unshift(largestr);
  }

  console.log(lr, rl);

  for (let i = 0; i < height.length; i++) {
    result += Math.min(rl[i], lr[i]) - height[i];
  }

  return result;
};
