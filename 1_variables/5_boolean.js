/** 불리언 타입 */

let 참 = true;
let 거짓 = false;
console.log(참); // true
console.log(거짓); // false

// 활용 예시
let isFree = true;
let isActivatied = false;
let isEnrolled = true;
console.log(isFree); // true

console.clear();

// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
