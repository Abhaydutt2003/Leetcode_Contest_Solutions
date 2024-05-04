/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubarrays = function(nums) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
        if(map.has(i)){
            map.get();
        }else{
            map.set(i,[i]);
        }
    }
};



let nums = [1,4,3,3,2];
console.log(numberOfSubarrays(nums));

