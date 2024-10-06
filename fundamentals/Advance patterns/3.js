/*
*       *
 *     *
  *   *
   * *
    *
*/
let n = 5
for(i = 1;i<=n;i++){
    let str = ""
    for(j=1;j<=2*n-i;j++){
        if((j == i) || ((j + i) == (2*n))){
            str += "*"
        }
        else str += " "
    }
    console.log(str)
}


/* correct but inefficient
let gaps = 2*n-3
for(let i = 1;i<=n;i++){
    let str = ""
    for(j = 0;j<i-1;j++){
        str += " "
    }
    str += "*"
    for(j = 1;j<=gaps;j++){
        str += " "
    }
    // console.log(gaps)
    
    if(gaps>0){
        str += "*"
    }
    gaps -= 2
    console.log(str)
    
}

*/