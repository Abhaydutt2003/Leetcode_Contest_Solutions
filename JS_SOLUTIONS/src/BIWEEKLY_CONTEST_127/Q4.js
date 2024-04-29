let MOD = 1000000000 + 7;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPowers = function(nums, k) {
    nums.sort((a,b)=>a-b);
    return getAns(nums,k,[],0);
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @param {number[]} selected 
 * @param {number} index 
 */
let getAns = (nums, k,selected,index)=>{
    if(selected.length == k){
        console.log(selected)
        return selected[selected.length-1]-selected[selected.length-2];
    }else if(index == nums.length){
        return 0;
    }
    let ans = 0;
    for(let i = index;i<nums.length;i++){
        //console.log(selected);
        selected.push(nums[i]);
        //console.log(selected);
        ans = (ans+getAns(nums,k,selected,i+1))%MOD;
        selected.pop();
    }
    return ans;
}

let nums = [1,2,3,4], k = 3;
console.log(sumOfPowers(nums,k));








//cannot actually determine that in each sub , what elements will have
//the lowest absolute difference, therefore need to teraverse for 
//every node