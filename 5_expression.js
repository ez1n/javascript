/** 표현식 */

// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 화살표 함수 const name = () => { }
// 생성자 함수 const object = new Function();
// 즉시 실행 함수 (function name() { })

// 표현식
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2)); // 3

// 화살표 함수
add = (a, b) => a + b;

console.log(add(1, 2)); // 3

// IIFE (Immediately-Invoked Function Expressions, 즉시 실행 함수)
(function run() {
  console.log("😀");
})(); // 😀
