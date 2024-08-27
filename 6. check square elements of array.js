// checking square in another array
// arr1 = [1,2,3,4] arr2=[1,9,7,16]
let arr1 = [1,2,3,4] 
let arr2=[1,9,4,16]

// first solution O(n^2)
const checkSquare =(arr1,arr2)=>{
    for(let i=0;i<arr1.length;i++){
        let squareFound = false
        for(let j = 0;j<arr2.length;j++){
            if(arr2[j]===(arr1[i]*arr1[i])){
                squareFound = true
                break
            }
        }
        if(!squareFound){
            return false
        }
    }
    return true
}
console.log(checkSquare(arr1,arr2))