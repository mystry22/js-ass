### 1
# Arithemetic Operators
+
-
/
*
**
%
--
++

# Assignment operator
=
+=
-=
*=
/=
%=
**=

# Comparison Operators
==
===
!=
!==
>
<
>=
<=

# Logical Operators
&&
||
!

# Bitwise Operators
&
|
<<
>>
>>>

### 2
# Arithemetic Operators Example

let Bola_age  = 10;
let Tope_age = 12;

//Sum
let sum_age = Bola_age + Tope_age;
//Difference
let diff_age = Tope_age - Bola_age;

# Assignment Operators Example

//assign
const Track = 'Mobile Dev';
//self increase and assign
let x = 5;
let y = 6;
x += y;

# Comparision Operators Example

const x = 5;
const y = '5';

if(x == y){
    console.log('This is true as they have the same value');
}else if(x === y){
   console.log('This is false as they are not of the same data type'); 
}

# Logical Operators Example
const sex = 'female';
const track = 'SWE';

if(sex == 'female' && track == 'SWE' ){
    console.log('Greate Women in Tech');
}else if(sex == 'male' && track == 'SWE' ){
    console.log('Greate Women in Tech');
}else if(sex != 'female' || sex != 'male'){
    console.log('what gender do you represent?')
}


# 4

for(let i = 1; i < 20; i+=7){
    console.log(i)
}

Answer
1
8
15