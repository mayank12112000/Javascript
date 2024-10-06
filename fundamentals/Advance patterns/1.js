/**
   A
  ABA
 ABCAB
ABCDABC
 */
let n = 4
for(let i = 1;i<=n;i++){
    let str = ""
    for(let j = 1;j<=n-i;j++){
        str += " "
    }
    for(let k = 1;k<=i;k++){
        str += String.fromCharCode(65 + k -1)
    }
    for(let l = 0 ; l<i-1;l++){
        str += String.fromCharCode(65+l)
    }
    console.log(str)
}