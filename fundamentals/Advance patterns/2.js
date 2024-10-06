/*
ABCDEFG
ABC EFG
AB   FG
A     G
*/
let n = 4
let str = ""
for(let i = 1;i<=2*n-1;i++){
    str += String.fromCharCode(65+i-1)
}
console.log(str)
str = ""
let m = n-1 // new number of rows
let nsp = 1 // no of spaces

for(let i = 1;i<=m;i++){
    let charCode = 65
    for(let j = 0;j<m-i+1;j++){
        str += String.fromCharCode(charCode)
        charCode++
    }
    for(let k = 0;k<nsp;k++){
        str += " "
        charCode++
    }
    nsp += 2
    for(let j = 0;j<m-i+1;j++){
        str += String.fromCharCode(charCode)
        charCode++
    }
    console.log(str)
    str = ''
}