// count unique numbers
// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8
// we have taken sorted array

// first way to make a set out of array and find the length
let arr = [1,1,2,2,3,4,4,5,6,7,8,8]
let arrSet = new Set(arr)
console.log("1st:",[...arrSet].length)

// second way: o(n^2) inefficient
const findUniqueNumbers =(arr)=>{
    let setArr = []
    for(let number of arr){
        let exists = false
        for(let set_number of setArr){
            if(set_number===number){
                exists = true;
                break
            }
        }
        if(!exists){
            setArr.push(number)
        }
    }
    return setArr.length
}
console.log("2nd:",findUniqueNumbers(arr))

// third way: o(n)
const findUniqueNumbers2=(arr)=>{ // only for sorted array
    let uniqueNums = 0
    for(let i =0;i<arr.length;i++){
        let first = arr[i]
        let second = arr[i+1]
        if (second !== first){
            uniqueNums++
        }
    }   
    return uniqueNums
}
console.log("3rd:",findUniqueNumbers2(arr))
