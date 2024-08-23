// [1,2,3,4,3,5,4,6,7,8] total elements - 10
// count largest sum of consecutive n digits
// n = 4
let arr = [1,2,3,4,3,5,4,6,7,8] 
let n = 4
// first o(n^2)
const largestConsecutiveDigits=(arr,n)=>{
    let sum = 0;
    for(let i= 0;i<arr.length-n+1;i++){
         let tempSum= 0;
        for(let j = i;j<=i +n -1;j++){
            tempSum+= arr[j]
        }
        if(tempSum>sum){
            sum = tempSum
        }
    }
    return sum
}
console.log(largestConsecutiveDigits(arr,n))