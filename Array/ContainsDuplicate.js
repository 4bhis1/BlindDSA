var containsDuplicate = function (nums) {
  const obj = {};

  for (let num of nums) {
    if (obj[num]) {
      return true;
    }
    obj[num] = true;
  }
  return false;
};
