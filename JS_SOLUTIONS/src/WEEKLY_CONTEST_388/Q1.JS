/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a,b)=>b-a);
    apple.sort((a,b)=>a-b);
    let numBoxes = 1;
    let i = 0,j = 0;
    while(i<= apple.length && j<= capacity.length){
        if(apple[i] <= capacity[j]){
            capacity[j] -= apple[i];
            i++;
            if(i>=apple.length)break;
        }else{
            apple[i] = apple[i]-capacity[j];
            j++;
            numBoxes++;
        }
    }
    return numBoxes;
};


let apple = [5,5,5], capacity = [2,4,2,7]
console.log(minimumBoxes(apple,capacity));