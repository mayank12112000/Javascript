/**
   *
  * *
 *   *
*     *
 *   *
  * *
   *
 */
let n = 4
for(i = 1;i<=n;i++){
    let str = ""
    for(j = 1;j<=n+i-1;j++){
        if((i+j) == (n+1) ||( j-i) == (n-1)){
            str += "*"
        }else str += " "
    }
    console.log(str)
}
for(let i = 1;i<=n-1;i++){
    let str = " "
    for(let j = 1;j<= 2*n-1;j++){
        if(i== j || i+j == 2*(n-1)){
            str += "*"
        }else str += " "
    }
    console.log(str)
}