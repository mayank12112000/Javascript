/*
   *
  **
 ***
****
 ***
  **
   *
*/
let n = 4
for(let i = 1;i<=2*n-1;i++){
    let str = ""
    let gaps = Math.abs(n-i)
    for(let j = 1;j<= gaps;j++){
        str += " "
    }
    for(let k = 1;k<=n-gaps;k++){
        str += "*"
    }
    console.log(str)
}