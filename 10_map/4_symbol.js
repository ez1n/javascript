// Symbol 심볼 (심벌)
// 유일한 키르 생성할 수 있음

const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'hello');
// console.log(map.get(key2)); // hello
// console.log(key1 === key2); // true

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// keyFor은 전역 심벌 레지스트리에 한해서만 사용 가능
// 일반 Symbol은 key에 대한 정보가 숨겨져있음
console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined

const obj = { [k1]: 'hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // hello
console.log(obj[Symbol('key')]); // undefined