/** 함수와 메모리 */

/**
 * 함수 : 0x11에 저장
 * add : 0x11 참조
 * sum : 0x11 참조
 * => add, sum : {...} 이라는 동일한 함수 정의를 가리킴
 *
 * 함수 이름 자체는 함수를 가리키는 변수와 동일함!!
 * 함수 이름 할당 = 함수를 가리키는 메모리 주소 할당 하는 것
 *
 * 함수 이름 = 함수 자체
 * 함수 호출 = 소괄호 () 를 이용하여 호출 + 함수에서 원하는 인자 값 전달
 */

function add(a, b) {
  return a + b;
}

const sum = add;

console.log(sum(1, 2)); // 3
console.log(add(1, 2)); // 3