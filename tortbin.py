import math 
#tort decimalis szam atvaltas binarisra pl.: 1101.101
x=12.625
y=math.floor(x)
z=x-y
v=""
for index in range(3,-1,-1):
    oszto=2**index
    if (y/oszto)>=1:
        v+="1"
        y%=oszto
    else:
        v+="0"
v+="."
for index in range(-1,-4,-1):
    szorzo=2**index
    if (z/szorzo)>=1:
        v+="1"
        z%=szorzo
    else:
        v+="0"
print(v)
