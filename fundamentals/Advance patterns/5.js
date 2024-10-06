/*
   1   
  2 2
 3   3
4     4
*/
let n = 4
for(let i = 1;i<=n;i++){
    let str = ""
    for(let j = 1;j<=2*n-1;j++){
        if(i+j == n+1 || j-i == n-1){
            str += i
        }else str += " "
    }
    console.log(str)
}