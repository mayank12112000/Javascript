const arr = [1,-1,3,5,7]
// brute force: O(n^3)
const findMaxSumOfSubArray = (arr)=>{
    let maxSum = 0;
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            let currentSum = 0
            for(let k = i;k<=j;k++){
                currentSum += arr[k]
            }
            if(currentSum>maxSum){
                maxSum = currentSum
            }
        }
    }
    return maxSum
}
console.log(findMaxSumOfSubArray(arr))

const arr2 = [1,-1,3,5,7]
// prefix sum:
const prefixSumArr = (arr)=>{
    let prefixSum = []
    let max = 0;
    prefixSum[0] = arr[0]
    for(let i = 1;i<arr.length;i++){
        prefixSum[i] = prefixSum[i-1] + arr[i]
    }
    console.log("prefix sum:",prefixSum)
    for(let i = 0;i<prefixSum.length;i++){
        let currentSum = 0
        let start = i
        for(let j = i;j<prefixSum.length;j++){
            let end = j;
            currentSum = start === 0 ? prefixSum[end] :prefixSum[end] - prefixSum[start -1]
        }
        if(currentSum>max){
            max = currentSum
        }
    }
    return max
}
console.log(prefixSumArr(arr))
