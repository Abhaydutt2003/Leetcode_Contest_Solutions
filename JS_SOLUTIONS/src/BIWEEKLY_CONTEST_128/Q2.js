/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, w) {
  points.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let start = 0;
  let rect = 1;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] - points[start][0] <= w) {
      continue;
    } else {
      start = i;
      rect++;
    }
  }
  return rect;
};

//no issue of height?

let points = [
    [2, 3],
    [1, 2],
  ],
  w = 0;
console.log(minRectanglesToCoverPoints(points, w));
