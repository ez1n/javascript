/** static 정적 프로퍼티, 메서드 */

// 인스턴스 안에는 static 프로퍼티, 메서드들이 존재하지 않음!!
// 클래스를 통해서만 접근이 가능하다!

class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana); // Fruit { name: 'banana', emoji: '🍌' }
console.log(Fruit.MAX_FRUITS); // 4

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);
