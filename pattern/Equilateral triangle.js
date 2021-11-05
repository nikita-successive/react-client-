txt="";
for(let i=1;i<=10;i++){
    let k=1;
    for(let j=1;j<=19;j++){
        if(j>=11-i&&j<=9+i&&k){
            txt+= "*";
            k=0;
        }
        else{
         txt+=" ";
         k=1;
        }
    }
    txt+="\n";
}
console.log(txt);