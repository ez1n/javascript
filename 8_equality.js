/** 동등 비교 연산자 (Equality operators) */

// == : 값이 같음
// != : 값이 다름
// === : 값과 타입이 모두 같음
// !== : 값과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == "2"); // true - 타입은 다르지만 2는 같기 때문에 true
console.log(2 === "2"); // ** false - 타입이 다르기 때문에 false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // false - 메모리 주소가 서로 다르기 떄문!
console.log(obj1 === obj2); // false - 타입은 같지만 값 자체가 다르기 때문
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj3 == obj2); // true - obj2를 참조하므로 메모리 주소가 같음
console.log(obj3 === obj2); // true - obj2를 참조하므로 메모리 주소가 같음
