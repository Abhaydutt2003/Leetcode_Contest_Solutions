let MIN_VALUE = 1 << 31;
/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
  //get frequency of every element
  let max = MIN_VALUE;
  let map = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
    max = Math.max(map.get(ch), max);
  }
  //get the answer
  let ans = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (map.get(s[i]) == max) {
      ans = s[i] + ans;
      map.delete(s[i]);
    }
  }
  return ans;
};