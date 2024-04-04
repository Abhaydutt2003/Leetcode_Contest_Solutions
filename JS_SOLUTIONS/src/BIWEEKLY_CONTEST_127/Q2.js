/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function (possible) {
  let bobOnes = 0,
    bobZeros = 0;
  for (let i of possible) {
    if (i == 1) {
      bobOnes++;
    } else {
      bobZeros++;
    }
  }
  //traverse to see if dan wins
  let danOnes = 0,
    danZeros = 0;
  for (let i = 0; i < possible.length-1; i++) {
    if (possible[i] == 1) {
      danOnes++;
      bobOnes--;
    } else {
      danZeros++;
      bobZeros--;
    }
    if (danOnes - danZeros > bobOnes - bobZeros) {
      return i + 1;
    }
  }
  return -1;
};

//1 1 0 0 0 0

let possible = [1, 0, 1, 0];
console.log(minimumLevels(possible));
