/*
write a function that finds the index of a target value in a sorted integer array that may have been rotated.
The function should have a time complexity of O(log n).

Here's a breakdown of the problem:

Problem:

Given a sorted integer array that may have been rotated at an unknown pivot index.
Find the index of a target value in the array.
The function should have a time complexity of O(log n).
Example:

Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4
Explanation: The target 0 is found at index 4.
Example:

Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1
Explanation: The target 3 is not found in the array.
Constraints:

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums contains distinct values.
0 <= target <= 10^4
 */
// binary search:
const nums1 = [4, 5, 6, 7, 0, 1, 2]; const target1 = 0
const nums2 = [4, 5, 6, 7, 0, 1, 2]; const target2 = 3
const findIdx=(arr,target)=>{
    let min = 0
    let max = arr.length - 1
    let mid
    while(min <= max){
        mid = Math.floor((min+max)/2)
        let midValue = arr[mid]
        if(midValue > target){
            max = mid-1
        }else if(midValue < target){
            min = mid + 1
        }else{
            return mid
        }
    }
    return -1
    
}

console.log(findIdx(nums1,target1 ))
console.log(findIdx(nums2,target2))