// check duplicate value in array
let arr1 = [1,2,3,1]
let arr2 = [1,2,3,4]
let arr3 = [1,1,1,3,3,4,3,2,4,2]

// O(n^2)
const checkDuplicate = (arr)=>{
    for(let i = 0;i<arr.length ;i++){
        let numToCheck = arr[i]
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]===numToCheck){
                return true
            }
        }
    }
    return false
}
console.log(checkDuplicate(arr1))
console.log(checkDuplicate(arr2))
console.log(checkDuplicate(arr3))
console.log("***********************")

// using set O(n)
const checkDuplicate2=(arr)=>{
    const uniqueArr= [...(new Set(arr))]
    if(arr.length !== uniqueArr.length){
        return true
    }else return false
}

console.log(checkDuplicate2(arr1))
console.log(checkDuplicate2(arr2))
console.log(checkDuplicate2(arr3))
