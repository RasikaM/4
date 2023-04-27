console.clear();

/*
 NUMBERS

 normalus:
 - sveikieji
 - desimtieji

  mistiniai
 - Infinity
 - NaN (not-a-number)

  KINTAMUJU INICIAVIMO BUDAI

  - const (default)
  - let (jei kinta reiksme)
  - var (nenaudoti, nebent reikia)

   priskirimo operatoriai
  =, +=
*/

console.log(124);
console.log(-124);
console.log(3.5);
console.log(0);
console.log(1/3);
console.log(0.1 + 0.2);
console.log(1/10 + 2/10);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(2 * 2, 2 ** 2);
console.log(2 ** 3, '=', 2 * 2 * 2);
console.log(2 ** 4, '=', 2 * 2 * 2 * 2);

const a = 7;

console.log(a);

let PI = 3.14;

console.log(PI);

PI = 3;

console.log(PI);
console.log('-------------');


let suma = 0;
console.log(suma);

suma = suma + 10;
console.log(suma);

suma = suma + 2;
console.log(suma);

console.log('-------------');

let suma2 = 0;
console.log(suma2);

suma2 = suma2 +10;   // 
suma2 += 10;         // taip rasom x = x + y
console.log(suma2);

suma2 += 8;
console.log(suma2);

console.log('-------------');
let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 *= 3;
console.log(suma3);

suma3 -= 15;
console.log(suma3);

suma3 /= 2;
console.log(suma3);

suma3 **= 3;
console.log(suma3);

console.log('------------------');

const skaicius = 81;
const daliklis = 7;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

let liek = 144;
liek %= 10;
console.log(liek);

