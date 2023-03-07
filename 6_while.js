/** 반복문 while */

// while(조건) { }
// 조건이 false가 될떄까지 { } 코드 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log("아직 살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
}

// do ~ while - 한번 무조건 실행한 후 조건 검사
do {
  console.log("do-while 아직 살아있다!");
} while (isActive);
