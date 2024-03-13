/**
 * @param {number[]} nums
 * @return {number}
 */
let maxOperations = (nums) => {
    //initialize the memo
    memo = new Map();
    //call the memoFunc will all the possible cases
    let ans1 = memoFunc(nums, 2, nums.length - 1, nums[0] + nums[1]) + 1;
    let ans2 =
      memoFunc(
        nums,
        0,
        nums.length - 3,
        nums[nums.length - 1] + nums[nums.length - 2]
      ) + 1;
    let ans3 =
      memoFunc(nums, 1, nums.length - 2, nums[0] + nums[nums.length - 1]) + 1;
    return Math.max(ans1, ans2, ans3);
  };
  
  let memo;
  
  /**
   *
   * @param {number[]} nums
   * @param {number} start
   * @param {number} end
   * @param {number} theSum
   */
  let memoFunc = (nums, start, end, theSum) => {
    if (end - start + 1 < 2) {
      //array length less than 2, cannot process further
      return 0;
    }
    let state = start + " " + end + " " + theSum;
    if (memo.has(state)) return memo.get(state);
    //three conditions , first two, last two, and first and last
    let ans1 = 0,
      ans2 = 0,
      ans3 = 0;
    if (nums[start] + nums[end] == theSum) {
      ans1 = memoFunc(nums, start + 1, end - 1, theSum) + 1;
    }
    if (nums[start] + nums[start + 1] == theSum) {
      ans2 = memoFunc(nums, start + 2, end, theSum) + 1;
    }
    if (nums[end] + nums[end - 1] == theSum) {
      ans3 = memoFunc(nums, start, end - 2, theSum) + 1;
    }
    let ans = Math.max(ans1, ans2, ans3);
    memo.set(state, ans);
    return ans;
  };