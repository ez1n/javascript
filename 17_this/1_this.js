/**
 * 글로벌 컨텍스트의 this (글로벌 객체)
 *  - 브라우저: window
 *  - 노드: 모듈
 */

console.log(this); // {}

const x = 0;
module.exports.x = x;
console.log(this); // { x: 0 }

console.log(globalThis); // 노드에서 사용할 수 있는 전역 객체  (글로벌 객체)
// globalThis.setTimeout(); // globalThis 생략 가능
// setTimeout();

console.clear();

/**
 * 함수 내부에서의 this
 * globalThis
 * use strict: undefined
 */

function fun() {
  console.log(this);
}
fun(); // globalThis (use strict인 경우 undefined)
// 브라우저에서는 window 출력

/**
 * 생성자 함수 또는 클래스에서의 this
 * 앞으로 만들어질 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName(); // 냐옹
cat2.printName(); // 미야옹