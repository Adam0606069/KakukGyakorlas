const x=13;
let y=x;
let v="";
for (let index=7;index>=1;index--){
    let oszto=2**index;
    if ((y/oszto)>=1){
        v+="1";
        y=y%oszto;
    }
    else{
        v+="0";
    }
}
console.log(v);