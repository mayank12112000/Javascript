let n = 4
for(let i = 1;i<=n;i++){
    let str = ""
    for(let j = 1;j<=n-i;j++){
        str += " "
    }
    for(let k = 1;k<=n;k++){
        str+= "*"
    }
    console.log(str)
}