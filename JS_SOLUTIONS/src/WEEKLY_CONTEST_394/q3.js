/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
    //check
    for(let i =0;i<s.length;i++){
        if(s.length %i == 0 && isOk(s,i)){
            return i;
        }
    }
    return s.length;
};


/**
 * 
 * @param {string} s 
 * @param {number} i 
 */
let isOk = (s,i)=>{
    let freq = new Array(26).fill(0);
    for(let i = 0;i<s.length;i++){
        freq[s.charCodeAt(i)-97]++;
    }
    
}

let s = "abba";

