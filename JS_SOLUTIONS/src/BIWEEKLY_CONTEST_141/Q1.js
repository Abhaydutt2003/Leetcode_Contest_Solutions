// let findK = (n) => {
//   if (n < 3) return -1;
//   if (n === 3) return 2;

//   let msbPosition = 31 - Math.clz32(n);

//   let k = n - (1 << msbPosition);

//   while (k < n) {
//     if ((k | (k + 1)) === n) {
//       return k;
//     }
//     k++;
//   }

//   return -1;
// };

let findK = (n)=>{
   if (n < 3) return -1;
   if (n === 3) return 2;
   return n ^ (n & -n);
}

var minBitwiseArray = function (nums) {
  return nums.map((n) => {
    return findK(n);
  });
};

let nums = [2, 3, 5, 7];
console.log(minBitwiseArray(nums));
// console.log(findK(5));
