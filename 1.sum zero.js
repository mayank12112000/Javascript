// checking sum zero - problem 1
// give first pair which will give the sum = 0, if no pair return 0
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4]

// first solution -- O(n^2) quadratic
let arr1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// let arr2 = [4, 5, 6, 7, 8, 9, -21, 0, -2, 4, -1, -2]
let arr2=[-21,-2,-2,0,4,4,5,6,7,8,9]
const findSumZeroPair = (arr) => {

    let l = arr.length
    for (let firstPair of arr) {
        for (let secondPair of arr) {
            if (firstPair + secondPair === 0) {
                return [firstPair, secondPair]
            }
        }
    }
    return 0
}
console.log('1:', findSumZeroPair(arr1))
console.log('2:', findSumZeroPair(arr2))

// second solution --
const findSumZeroPair2 =(arr)=>{ // only work when arr is sorted: O(n^2)
    for(let i=0;i<arr.length;i++){
        let right = arr[i]
        for(let j = arr.length-1;j>=0;j--){
            let left = arr[j]
            if(right + left === 0){
                return [left,right]
            }else if (right + left < 0){
                break
            }
        }
    } return 0
}
console.log('3:',findSumZeroPair2(arr1))
console.log('3:',findSumZeroPair2(arr2))

// third solution same to second but different way to write: O(n)
const findSumZeroPair3 = (arr)=>{
    let left = 0
    let right = arr.length -1
    while(arr[left] < arr[right]){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left] , arr[right]]
        }else if(sum < 0){
            left++
        }else{
            right--
        }
    } 
    return [0,0]
}


console.log('3:',findSumZeroPair3(arr1))
console.log('3:',findSumZeroPair3(arr2))