/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
    let theSum = nums[0] + nums[1],
      ans = 0;
    for (let i = 0; i + 1 < nums.length; i += 2) {
      if (nums[i] + nums[i + 1] == theSum) {
        ans++;
      } else {
        break;
      }
    }
    return ans;
  };
  