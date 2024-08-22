// String anagram
// "hello" -> "lleoh"
const str1 = "hello"
const str2 = "lleoh"
const str3 = "mmeoww"
const str4 = "mmeowe"
const isAnagram = (str1,str2)=>{ // O(n)
    let map ={}
    if(str1.length !== str2.length){
        return false
    }
    for(let letter of str1){
        map[letter] = (map[letter] || 0)+ 1
    }
    for(let letter of str2){
        if(!map[letter]){
            console.log(letter)
            return false
        }
        map[letter] -= 1
    }
    return true
}

console.log(isAnagram(str1,str2))
console.log(isAnagram(str3,str4))