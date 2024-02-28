// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('둘다 ture!');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;