/** 접근자 프로퍼티 (Accessor Property) - getter, setter */

// 함수지만 고정된 값이 아니라 특정한 일을 하는데 속성의 한 부분이라고 간주될 때 get/set 키워드를 붙여 속성에 접근하듯이 접근이 가능함
// 무언가를 처리하는 행위는 아니지만 무언가를 조합하거나 특정한 일을 조금 더 제어하고 싶은 경우 사용

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
console.log(student.firstName);
console.log(student.fullName);
student.fullName = "김철수";
