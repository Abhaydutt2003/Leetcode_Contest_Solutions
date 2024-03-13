let Min_Value = Number.MIN_VALUE;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let map = new Map(),
    sum = 0,
    ans = Min_Value;
  for (let i of nums) {
    sum += i;
    let toLook = i - k;
    console.log(toLook,i);
    if (map.has(toLook)) {
      ans = Math.max(ans, sum - map.get(toLook));
    }
    toLook = i + k;
    console.log(toLook,i);
    if (map.has(toLook)) {
      ans = Math.max(ans, sum - map.get(toLook));
    }
    if (map.has(i)) {
      map.set(i, Math.min(map.get(i), sum - i));
    } else {
      map.set(i, Math.min(sum - i));
    }
  }
  return ans == Min_Value ? 0 : ans;
};

//explanation for the code above,
//we will start to traverse the map from the start. once we start to dowe will need to look for two numbers in the map , which can be seen in the code
//edge case->>> once we encounter a number that has the same value, we will keep the one that has the least prev value.

let nums = [-1,-2,-3,-4],
  k = 2;
console.log(maximumSubarraySum(nums, k));
