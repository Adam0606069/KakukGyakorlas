#atvaltas binarisba
x=13
y=x
v=""
for index in range(7,-1,-1):
    oszto=2**index
    if (y/oszto)>=1:
        v+="1"
        y=y%oszto
    else:
        v+="0"

print(v)