/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles2 = function (grid) {
  // let dp = new Array(grid.length).fill().map(()=>{
  //     return new Array(grid[0].length).fill(new Array(4).fill(0));
  // });
  // for(let i = 0;i<dp.length;i++){
  //     for(let j = 0;j<dp[0].length;j++){
  //         if(i-1>=0){
  //             dp[i][j][0]+=dp[i-1][j][0];
  //             dp[i][j][0]+=(grid[i][j] == 1)?1:0;
  //         }
  //         if(j-1>=0){
  //             dp[i][j][1]+=dp[i][j-1][1];
  //             dp[i][j][1]+=(grid[i][j] == 1)?1:0;
  //         }
  //     }
  // }
  // for(let i = dp.length-1;i>=0;i--){
  //     for(let j = dp[0].length-1;j>=0;j--){
  //         if(i+1<dp.length){
  //             dp[i][j][2]+=dp[i+1][j][2];
  //             dp[i][j][2]+=(grid[i][j] == 1)?1:0;
  //         }
  //         if(j+1<grid[0].length){
  //             dp[i][j][3]+=dp[i][j+1][3];
  //             dp[i][j][3]+=(grid[i][j] == 1)?1:0;
  //         }
  //     }
  // }
  // console.log(dp)
  let map = new Map();
  for (let i = 0; i < grid.length; i++) {
    let ones = 0;
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        ones++;
      }
    }
    map.set(i + "row", ones);
    ones = 0;
  }
  for (let j = 0; j < grid[0].length; j++) {
    let ones = 0;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] == 1) {
        ones++;
      }
    }
    map.set(j + "column", ones);
  }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function (grid) {
  let map = new Map();
  //set the ones in rows
  for (let i = 0; i < grid.length; i++) {
    let ones = 0;
    for (let j = 0; j < grid[0].length; j++) {
      ones += grid[i][j] == 1 ? 1 : 0;
    }
    map.set(i + ROW, ones);
  }
  //set the ones in columns
  for (let j = 0; j < grid[0].length; j++) {
    let ones = 0;
    for (let i = 0; i < grid.length; i++) {
      ones += grid[i][j] == 1 ? 1 : 0;
    }
    map.set(j + COLUMN, ones);
  }
  //calculate the answer
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        let rowOnes = map.get(i + ROW) - 1;
        let colOnes = map.get(j + COLUMN) - 1;
        answer += rowOnes * colOnes;
      }
    }
  }
  return answer;
};

let ROW = "-row";
let COLUMN = "-column";

let grid = [
  [1, 0, 1],
  [1, 0, 0],
  [1, 0, 0],
];
console.log(numberOfRightTriangles(grid));
