/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let bitTable = new Array(32).fill(0);
  let orWrapper = [0];
  let start = 0,
    end = 0,
    ans = Number.MAX_SAFE_INTEGER;
  while (end < nums.length) {
    doOperation(bitTable, orWrapper, nums[end]);
    if (orWrapper[0] < k) {
      end++;
      continue;
    }
    while (start <= end && orWrapper[0] >= k) {
      ans = Math.min(ans, end - start + 1);
      undoOperation(bitTable, orWrapper, nums[start++]);
    }
    end++;
  }
  return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
};

/**
 *
 * @param {number[]} bitTable
 * @param {number[]} orWrapper
 * @param {number} start
 */
let undoOperation = (bitTable, orWrapper, start) => {
  for (let i = 0; i < 32; i++) {
    if (start & (1 << i)) {
      bitTable[i] -= 1;
    }
    if (bitTable[i] == 0) {
      orWrapper[0] &= ~(1 << i);
    }
  }
};

/**
 *
 * @param {number[]} bitTable
 * @param {number[]} orWrapper
 * @param {number} end
 */
let doOperation = (bitTable, orWrapper, end) => {
  orWrapper[0] |= end;
  for (let i = 0; i < 32; i++) {
    if (end & (1 << i)) {
      bitTable[i]++;
    }
  }
};

let nums = [2, 1, 8],
  k = 10;
console.log(minimumSubarrayLength(nums, k));
