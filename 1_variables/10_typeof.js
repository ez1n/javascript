/** 타입 확인 법 (typeof) */

// typeof : 데이터 타입 확인
// 값을 타입 문자열로 반환
// JS => 할당된 값에 따라 타입 결정됨!

let variable;
console.log(typeof variable); // undefined

variable = "";
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

console.log(typeof 123); // number
console.log(typeof "123"); // string
