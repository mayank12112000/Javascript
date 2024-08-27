// divide and conquerer technique
// find the index of given no. in sorted array
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => 7 ->input || index 6 -> output
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let n = 7
let binarySearch = (arr,n)=>{
    let min = 0;
    let max = arr.length -1
   while(min <= max){
    let midIdx = Math.floor((min + max)/2)
    let midValue = arr[midIdx]
    if(n>midValue){
        min = midIdx
    }else if(n<midValue){
        max = midIdx
    }else return midIdx
   }
}
console.log(binarySearch(arr,7))