/** 증감 연산자 (Increment & Decrement Operators) */

let a = 0;
console.log(a); // 0

a++; // a = a + 1
console.log(a); // 1

a--; // a = a - 1
console.log(a); // 0

/** 주의사항!
 * a++ : 필요한 연산을 하고 그 뒤 값을 증가시킴 (후위 연산자)
 * ++a : 값을 먼저 증가시킨 뒤 필요한 연산을 함 (전위 연산자)
 */

a = 0;
let b = a++;
console.log(b); // 0
console.log(a); // 1

a = 0;
b = ++a;
console.log(b); // 1
console.log(a); // 1
