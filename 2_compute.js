/** 객체에 동적으로 접근하기 */

const obj = {
  name: "예진",
  age: 26,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "name")); // 예진

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "engineer");
console.log(obj); // { name: '예진', age: 26, job: 'engineer' }

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "job");
console.log(obj); // { name: '예진', age: 26 }
