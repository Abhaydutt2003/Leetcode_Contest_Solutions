let DIR = [
  [1, 0],
  [0, 1],
  [1, 1],
  [0,0],
];

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
      let isPoss = check(i, j, "W", grid);
      let isPoss2 = check(i, j, "B", grid);
      if (isPoss || isPoss2) return true;
    }
  }
  return false;
};

let check = (i, j, colour, grid) => {
  let moveMade = false;
  for (let dir of DIR) {
    let x = i + dir[0];
    let y = j + dir[1];
    if (grid[x][y] != colour) {
      if (!moveMade) {
        moveMade = true;
      } else {
        return false;
      }
    }
  }
  return true;
};
// let canMakeSquare = (grid) => {
//   for (let i = 0; i <= 1; i++) {
//     for (let j = 0; j <= 1; j++) {
//       if (
//         grid[i + 1][j] == grid[i][j] &&
//         grid[i + 1][j + 1] == grid[i][j] &&
//         grid[i][j + 1] == grid[i][j]
//       ) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

let grid = [["B","W","B"],["B","W","W"],["B","W","B"]]
console.log(canMakeSquare(grid));
