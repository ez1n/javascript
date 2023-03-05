/** 우선순위 */
// 우선순위가 헷갈리는 경우 먼저 계산하고 싶은 식에 괄호로 명시

let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 14
result = (a + b) * 4;
console.log(result); // 20

result = a++ + b * 4;
console.log(result); // 14
console.log(a); // 3 (후위 연산자)
