// checking sum zero - problem 1
// give first pair which will give the sum = 0, if no pair return 0
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4]

// first solution -- O(n^2) quadratic
let arr1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8]
let arr2 = [4, 5, 6, 7, 8, 9, -21, 0, -2, 4, -1, -2]
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