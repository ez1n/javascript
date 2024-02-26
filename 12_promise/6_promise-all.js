function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('🍌'), 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('🍎'), 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no oragne'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana()
  .then(banana => getApple()
    .then(apple => [banana, apple])
  ).then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()])
  .then(fruits => console.log('all', fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()])
  .then(fruit => console.log('race', fruit));

// Promise.allSettled
Promise.all([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-error', fruits))
  .catch(console.log); // no orange

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-error', fruits))
  .catch(console.log);
// [
//   { status: 'fulfilled', value: '🍌' },
//   { status: 'fulfilled', value: '🍎' },
//   {
//     status: 'rejected',
//     reason: Error: no oragne
//         at getOrange (/Users/ezin/Desktop/study/javascript/12_promise/6_promise-all.js:14:25)
//         at Object.<anonymous> (/Users/ezin/Desktop/study/javascript/12_promise/6_promise-all.js:36:46)
//         at Module._compile (node:internal/modules/cjs/loader:1376:14)
//         at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//         at Module.load (node:internal/modules/cjs/loader:1207:32)
//         at Module._load (node:internal/modules/cjs/loader:1023:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//         at node:internal/main/run_main_module:28:49
//   }
// ]