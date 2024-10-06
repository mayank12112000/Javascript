/*
*      *
**    **
***  ***
********
********
***  ***
**    **
*      *
*/
let n = 4
for(let i = 1;i<=n;i++){
    let str = ""
    for(let j = 1;j<=i;j++){
        str += "*"
    }
    for(let j = 1;j<=2*n-2*i;j++){
        str += " "
    }
    for(let j = 1;j<=i;j++){
        str += "*"
    }
    console.log(str)
}
for(let i = n;i>0;i--){
    let str = ""
    for(let j = 1;j<=i;j++){
        str += "*"
    }
    for(let j = 1;j<=2*n-2*i;j++){
        str += " "
    }
    for(let j = 1;j<=i;j++){
        str += "*"
    }
    console.log(str)
    
}