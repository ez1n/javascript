function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getchicken() {
  return Promise.resolve(`🪴 => 🐓`);
  // return Promise.reject(new Error('치킨ㅇ르 가지고 올 수 없습니다!'));
}

async function makeFiredEgg() {
  const chicken = await getchicken();
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFiredEgg()
  .then(console.log);