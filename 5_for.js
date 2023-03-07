/** 반복문 (Loop Statement) */

// for(변수 선언문; 조건식; 증감식) { }
/** 실행 순서
 * 1. 변수 선언문
 * 2. 조건식의 값이 참이면 { } 코드블럭 수행
 * 3. 증감식 수행
 * 4. 조건식이 거짓이 될때까지 2, 3번 반복
 */

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 중첩 반복문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한 루프
// for (;;) {
//   console.log("😀");
// }

// 반복문 제어 : continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // 다음 반복문으로 넘어감
    console.log("i가 드디어 10이 되었다!");
    break; // 반복문 중지
  }
  console.log(i);
}
