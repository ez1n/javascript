// Iterable: 순회가 가능함
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 반환한다는 것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread operator

const array = [1, 2, 3];
for (const item of array) {
    console.log(item);
}

for (const item of array.values()) {
    console.log(item);
}
for (const item of array.keys()) {
    console.log(item);
}
for (const item of array.entries()) {
    console.log(item);
}

const obj = { 0: 1, 1: 2 }; // for..of: error
for (const item in obj) { // for..in: key를 출력
    console.log(item); // 0, 1
}

console.clear();

const iterator = array.values();
// for (const item of iterator) {
//     console.log(item);
// }

// console.log(iterator.next());

while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}