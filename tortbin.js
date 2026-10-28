
//tort decimalis szam atvaltas binarisra pl.: 1101.101
const x=12.6875;
let z=x%1;
let y=x-z;
let v="";
for (let index=3;index>-1;index--){
    oszto=2**index;
    if ((y/oszto)>=1){
        v+="1";
        y%=oszto;
    }
    else{
        v+="0";
    }
}
v+="."
for (let index=-1;index>=-4;index--){
    szorzo=2**index;
    if ((z/szorzo)>=1){
        v+="1";
        z%=szorzo;
    }
    else{
        v+="0";
    }
}
console.log(v);
