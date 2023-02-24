/** 문자열 타입 */

let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수 문자 출력
string = '"안녕!"'; // 따옴표 출력
console.log(string);
string = "'안녕!'";
console.log(string);

string = "안녕!\n하이!"; // 줄바꿈
console.log(string);

string = "안녕!\n하이!\t\t내 이름은\\\u09AC"; // 탭, \, 유니코드
console.log(string);

// 템플릿 리터럴 (Template Literal) ``, $ 이용
let id = "예진";
let greetings = `안녕, ${id} \n즐거운 하루 보내요!`;
console.log(greetings);
