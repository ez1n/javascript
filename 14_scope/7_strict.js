// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드 제공

'use strict';

var x = 1;
// delete x; // error  

function add(x) {
  var a = 2;
  // b = a + x; // error (키워드 생략 불가)
  var b = a + x;
  console.log(this); // undefined (함수 내부에서 this 출력하는 경우)
}
add(1);

const array = [1, 2, 3];
for (num of array) {
  console.log(num); // error (키워드 생략 불가) -> let / const num of array
}
