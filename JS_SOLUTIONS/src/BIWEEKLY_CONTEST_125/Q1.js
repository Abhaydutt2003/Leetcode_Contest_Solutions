/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let map = new Map();
  for (let i of nums) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  //sort the map
  let sortedMap = new Map([...map].sort((a, b) => a[0] - b[0]));
  //now get the answer
  let operations = 0;
  for (let [key, value] of sortedMap) {
    if (key < k) {
      operations += value;
    } else {
      break;
    }
  }
  return operations;
};

let nums = [1, 1, 2, 4, 9],
  k = 9;
console.log(minOperations(nums, k));
