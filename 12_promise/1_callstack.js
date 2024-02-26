function a() {
  // for (let i = 0;i < 100000000;i++); // a()가 모두 수행될 때까지 기다림 (속도 저하)
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result); // 3