// 클로저 Closure
// 함수와 외부 렉시컬 환경의 조합
// 내부 함수에서 외부 함수의 스코프에 접근할 수 있는 것


const text = 'hello';
function func() {
  console.log(text);
}
func(); // hello

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
// outer 렉시컬 환경이 함께 반환
// inner가 외부 렉시컬 환경으로 outer의 렉시컬 환경을 참조하고 있기 때문
const func1 = outer();
func1(); // inside inner: 0