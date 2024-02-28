// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로터타입(많은 데이터를 담고 있는 객체) 생성됨

const dog = {
  name: 'Dog',
  play: function () {
    console.log('논다멍');
  }
};
dog.play(); // 논다멍
const obj = new dog.play();
console.log(obj); // play{}

// ES6 method
const cat = {
  name: 'cat',
  play() { // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐용');
  }
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용 ❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments 
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2); // 전역 객체의 arguments

const printArrorw = () => {
  console.log(this);
};
printArrorw(); // 화살표 함수가 정의된 곳에서의 스코프의 this

cat.printArrow = printArrorw;
cat.printArrorw(); // 화살표 함수가 정의된 곳에서의 스코프의 this