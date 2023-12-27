/** 문자열 함수 (String) */

const textObj = new String("Hello World!");
const text = "Hello World!";
console.log(textObj); // [String: 'Hello World!']
console.log(text); // Hello World!
console.log(text.length); // 12

console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l

// 문자의 인덱스
console.log(text.indexOf("l")); // 2
console.log(text.lastIndexOf("l")); // 9

// 문자 포함 여부
console.log(text.includes("tx")); // false
console.log(text.includes("H")); // true

// 시작 문자
console.log(text.startsWith("H")); // true
console.log(text.startsWith("h")); // false

// 대소문자 변환
console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

// 부분적인 문자열 가져오기
console.log(text.substring(0, 2)); // He
// 문자열 삭제
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

const space = "           space      ";
console.log(space.trim()); // 공백 제거

const longText = "Get to the point";
console.log(longText.split(" ")); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(" ", 2)); // [ 'Get', 'to' ]
