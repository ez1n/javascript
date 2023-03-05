// 주석을 달면 됨

/**
 * 주석이 됨
 * 다음 줄로 자동으로 넘어감
 */

/** 변수 규칙
 * 라틴 문자 (0-9, a-z, A-Z, ), _
 * 대소문자 구분
 * camelCase (likeThis) 추천
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌(_, $ 예외)
 * 이모지 ❌
 * 여러개의 변수를 1,2,3 숫자로 구분 ❌ -> 의미있고 구체적인 이름으로 작성
 */

let apple;
let redApple;

// 나쁜 예제
let num = 20;

// 좋은 예제
let myAge = 20;

// 나쁜 예제
let audio1;
let audio2;

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁!
// 구체적인 것을 뒤로 빼놓음! - 추후에 변수 찾기가 쉬움
let audioBackground;
let audioWind;
