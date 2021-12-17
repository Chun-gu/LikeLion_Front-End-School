// 객체지향

// 1. 모듈 패턴
function Person() {
    let age = 35;

    return {
        getAge: function () {
            return age;
        },
        setAge: function (data) {
            age = data;
        },
    };
}

const person = Person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
    this.age = 35;
}

PersonType.prototype.getAge = function () {
    return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.age);

let person2 = { age: 35 };
person2.age;

// 3. 모듈 + 사용자 정의패턴
function PersonType2() {
    let age = 25;

    function innerPersonType() {}

    innerPersonType.prototype.getAge = function () {
        return age;
    };

    return innerPersonType;
}

// Person3는 innerPersonType()이라는 함수가 할당되어 생성자 역할을 함
const Person3 = PersonType2();

// person3는 Person3의 인스턴스
const person3 = new Person3();

// 4. IIFE 패턴으로 만들기
const PersonType3 = (function () {
    let age = 25;

    function innerPersonType() {}

    innerPersonType.prototype.getAge = function () {
        return age;
    };

    return innerPersonType;
})();
