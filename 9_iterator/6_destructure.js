// 구조 분해 할당 (Destructuring Assignment)
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['🍏', '🥝', '🍓', '🍌'];
console.log(fruits[0]); // 🍏

const [first, second, ...others] = fruits;
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x, y, z); // 1 2 0

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title, emoji); // apple 🍎

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name, age, occupation, pet); // Ellie 20 s/w engineer 강아지