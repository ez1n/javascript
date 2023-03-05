/** 상수 변수 const */

// let : 재할당 가능
let a = 1;
a = 2;

/** const : 재할당 불가능
 * 상수
 * 상수변수 또는 변수
 */
const text = "hello";
// text = "hi"; // error - 재할당 불가

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "사과",
  color: "red",
  display: "🍎",
};
// apple = {}; // 불가능!

console.log(apple); // { name: '사과', color: 'red', display: '🍎' }
apple.name = "오렌지";
apple.display = "🍊";
console.log(apple); // { name: '오렌지', color: 'red', display: '🍊' }

/**
 * 객체 : Heap에 보관 => apple의 참조 주소를 찾아 그 주소 안의 object의 데이터 변경
 * const : apple 메모리 셀에 다른 주소 할당 X => 참조 주소 변경 불가!!
 *
 * let - 재할당 가능, 변경 가능
 * const - 재할당 불가능 변경 가능
 */
