// 하면 안되는 것!

const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // 4

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식..
fruits[4] = '🍓';
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', '🍓' ]

delete fruits[1];
console.log(fruits); // [ '🍌', <1 empty item>, '🍇', '🍑', '🍓' ] - 값만 사라지고 자리는 남아있음
