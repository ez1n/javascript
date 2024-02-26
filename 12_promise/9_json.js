// JSON: JavaScript Object Notatino
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
// 객체의 property (데이터의 상태)만 포함됨

const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => console.log('eat'),
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json); // Function은 포함되지 않음 : 데이터가 아니기 때문에 JSON에 포함되지 않음

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);