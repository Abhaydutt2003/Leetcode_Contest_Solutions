/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function (arr) {
  let map = new Map();
  for (let str of arr) {
    let allSub = new Set();
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substr = str.slice(i, j);
        allSub.add(substr);
      }
    }
    for (let sub of allSub) {
      map.set(sub, (map.get(sub) || 0) + 1);
    }
  }
  let ans = [];
  for (let str of arr) {
    let shortestUncommon = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substr = str.slice(i, j);
        if (map.get(substr) == 1 && isValid(substr, shortestUncommon)) {
          shortestUncommon = substr;
        }
      }
    }
    ans.push(shortestUncommon);
  }
  return ans;
};

/**
 *
 * @param {String} st1
 * @param {String} str2
 */
let isValid = (str1, str2) => {
  if (
    str2.length == 0 ||
    str1.length < str2.length ||
    (str1.length == str2.length && str1 < str2)
  ) {
    return true;
  } else {
    return false;
  }
};

let arr = ["vbb", "grg", "lexn", "oklqe", "yxav"];
console.log(shortestSubstrings(arr));
