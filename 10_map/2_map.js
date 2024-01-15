// Map
// [key, value]로 이루어진 자료구조

// const map = new Map(); or
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key7')); // false

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎 key2 🍌
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }]

// 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key4')); // undefined

// 추가
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부 삭제
map.clear();
console.log(map); // Map(0) {}

// object와의 큰 차이점?
// 사용할 수 있는 함수(인터페이스)가 다름
// map은 key를 이용한 직접적인 접근이 불가능함 (get 사용)
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' } }

const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' } }
console.log(obj[key]);
console.log(map2[key]); // undefined
console.log(map2.get(key));