/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function (nums) {
  //get all the unique elements
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  //get the sorted map
  let sortedArr = [...map].sort((a, b) => a[0] - b[0]);
  let currentLength = 1,
    ans = 1;
  for (let i = 2; i < sortedArr.length; i++) {
    if (
      (sortedArr[i - 1][1] == 1 || currentLength == 1) &&
      sortedArr[i - 1][0] + 1 == sortedArr[i][0]
    ) {
      //valid , can increase the prev element by 1 and we will get the answer
      currentLength++;
    } else {
      //not valid , check for the max and move forward
      ans = Math.max(ans, currentLength);
      currentLength = 1;
    }
  }
  //edge case
  ans = Math.max(ans, currentLength);
  return ans;
};

let nums = [2, 1, 5, 1, 1];
console.log(maxSelectedElements(nums));

//get all the unique elements
