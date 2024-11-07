
var maxSubArray = function(nums) {
    let tempMax = 0
    let max = nums[0]
  
      for(let num of nums){
          tempMax = Math.max(num+tempMax, num)
          max = Math.max(max, tempMax)
      }   
  
  
    return max
  };