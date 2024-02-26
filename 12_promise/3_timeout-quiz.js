// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) throw new Error('callback 함수를 전달해주세요.');
  if (!seconds || seconds < 0) throw new Error('seconds는 0보다 커야합니다.');

  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => console.log('타이머완료'), 1);
} catch (error) { }