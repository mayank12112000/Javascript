let n = 4
for(let i = 1;i<=n;i++){
    str =""
    for(let j = 1;j <= n-i;j++){
        str += " "
    }
    for(let k = 0;k< 2*i-1;k++){
        str += String.fromCharCode(65 + k)
    }
    console.log(str)
}