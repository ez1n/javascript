function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getchicken() {
  // return Promise.resolve(`🪴 => 🐓`);
  return Promise.reject(new Error('치킨ㅇ르 가지고 올 수 없습니다!'));
}

fetchEgg('🐔')
  .then(console.log); // 🐔 => 🥚

getchicken()
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log) // 🪴 => 🐓 => 🥚 => 🍳
  .catch(error => console.log(error.name));