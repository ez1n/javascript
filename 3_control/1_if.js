/** 조건문 (Conditional Statement) */

// if (조건) { }
// if (조건) { } else { }
// if (조건 1) { } else if (조건 2) { } else { }

let fruit = "hi";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("😊");
}

if (2 < 1) {
  // false가 되는 표현식인 경우 실행되지 않음
  console.log("출력되면 안됨!");
}
