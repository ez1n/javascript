/** 값과 참조의 차이 */

// 원시 타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // b == 1
b = 2;

console.log(a); // 1
console.log(b); // 2

// 객체 타입은 참조값 (메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // 0x1234
  name: "사과",
};
let orange = apple; // 0x1234 - apple의 메모리 주소가 복사됨
orange.name = "오렌지";

console.log(apple); // 오렌지
console.log(orange); // 오렌지

/**
 * 원시 타입과 객체 타입은 복사되는 방식이 다름
 *
 * 원시 타입 : 값 할당
 * 객체 타입 : 메모리 주소 보관 (참조 값)
 */
