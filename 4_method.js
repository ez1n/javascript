/** 객체 안의 함수 */

const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
