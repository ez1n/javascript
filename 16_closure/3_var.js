// let
function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0;i < 5;i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func()); // 0 1 2 3 4

// var
// 블럭 스코프가 적용되지 않기 때문에 i의 최종 값인 5가 출력됨
function varLoop() {
  const varArray = [];
  // var과 let의 차이점!
  for (var i = 0;i < 5;i++) {
    varArray.push(function () {
      console.log(i);
    });
  }
  return varArray;
}

const varArray = varLoop();
varArray.forEach((func) => func()); // 5 5 5 5 5