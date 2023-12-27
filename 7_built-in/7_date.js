/** 날짜 관련 함수 (Date)
 *
 * UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
 */

console.log(new Date()); // 현재 시간 출력됨
console.log(new Date("Jun 5, 2022"));
console.log(new Date("2022-12-17T03:24:00"));

console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0부터 시작 (0 = 1월)
console.log(now.getFullYear()); // 2023
console.log(now.getDate()); // 0 = 1일
console.log(now.getDay()); // 0 = 일요일, 1... 6: 토요일
console.log(now.getTime()); // 시간을 가져오는 함수
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleDateString("es-US")); // 미국 형식
console.log(now.toLocaleDateString("ko-KR")); // 한국 형식
