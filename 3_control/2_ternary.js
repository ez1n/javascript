/** 삼항 조건 연산자 (Ternary Operator) */

// 조건식 ? 참인 경우 : 거짓인 경우

let fruit = "apple";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("😊");
}

// 삼항 연산자
fruit === "apple" ? console.log("🍎") : console.log("😊");

let emoji = fruit === "apple" ? "🍎" : "😊";
console.log(emoji); // 🍎
