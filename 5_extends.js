/** 상속 */

// 클래스에서 지정된 공통된 속성과 행동을 그대로 가질 수 있음 (상속)

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다!");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다!");
//   }
//   play() {
//     console.log("놀자!");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!");
  }

  sleep() {
    console.log("잔다!");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super: 부모 클래스
    this.ownerName = ownerName;
  }
  play() {
    console.log("논다!");
  }

  // 오버라이딩 overriding (부모 클래스의 메서드를 덮어 씌움)
  sleep() {
    console.log("강아지가 잔다!");
  }

  // 부모 클래스의 메서드를 유지하면서 다른 기능을 추가하고 싶은 경우
  eat() {
    super.eat();
    console.log("강아지가 먹는다!");
  }
}
const dog = new Dog("빨강이", "예진");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
