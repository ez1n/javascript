/** 함수 */

// 예제 1
function sum(a, b) {
  console.log("function");
  return a + b;
}

const result = sum(1, 2);
console.log(result); // function 3

// 예제 2
// 수정이 필요한 경우 한 곳만 수정하면 모두 변경 가능! => 재사용성, 유지보수성 ↑
function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName)); // 김 지수

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2)); // 박 철수
