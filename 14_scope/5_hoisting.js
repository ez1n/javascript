// 자바스크립트 엔진이 코드를 실행하기 전, 변수, 함수, 클래스의 선언문을 끌어 올리는 것
// 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮긴다

// 함수
// 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능하다
print(); // Hello

function print() {
  console.log('Hello');
}
print(); // Hello

// 변수 (선언 전에 접근 불가)
// 값을 저장하는 공간
// 자료를 저장할 수 있는 이름이 주어진 기억장소
// var
// let: 재할당이 필수로 필요한 경우
// const

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안된다
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생한다
console.log(hi); // Cannot access 'hi' before initialization
let hi = 'hi';

console.log(func1); // error - 선언 전에 접근 불가
let func1 = function () { };

const cat = new Cat(); // error - 선언 전에 접근 불가
class Cat { }

let x = 1;
{
  console.log(x); // 1
  // 블럭 안에서 선언되어 블럭 내부에서 호이스팅 되기 때문에 초기화 되지 않은 상태
  let x = 2; // error
}