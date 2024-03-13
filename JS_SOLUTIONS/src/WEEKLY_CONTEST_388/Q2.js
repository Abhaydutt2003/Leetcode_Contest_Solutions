/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a);
    let timeSpent = 0,totalSum = 0;
    for(let i = 0;i<k;i++){
        happiness[i] -= timeSpent;
        happiness[i] = Math.max(0,happiness[i]);
        totalSum+=happiness[i];
        timeSpent++;
    }
    return totalSum;
};




let happiness = [1,2,3], k = 2
console.log(maximumHappinessSum(happiness,k));

