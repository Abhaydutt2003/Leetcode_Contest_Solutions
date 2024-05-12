/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
  let map = new Map();
  for (let i = 0; i + k <= word.length; i += k) {
    let sub = word.substring(i, i + k);
    map.set(sub, (map.get(sub) || 0) + 1);
  }
  let arr = [...map].sort((a, b) => {
    return b[1] - a[1];
  });
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) continue;
    ans += arr[i][1];
  }
  return ans;
};

//let word = "leetcoleet", k = 2;
let word = "leetcodeleet",
  k = 4;
console.log(minimumOperationsToMakeKPeriodic(word, k));

//leetcoleet
//lelecoleet
//leleleleet
//lelelelele
