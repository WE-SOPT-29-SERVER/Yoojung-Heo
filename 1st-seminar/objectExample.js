/* Object 생성자 함수 */
const person = new Object();

//프로퍼티 추가
person.name = "허유정"; //점표기법 점근
person.part = "Server";
person["group"] = "YB"; //브라켓 표기법 접근
person.sayHello = function() { //이름이 없기 때문에 anonymous
    console.log(`안녕하세요 ${this.name}입니다.`);
};
/* person.greet = function greeting() {
    console.log(`안녕하세요.`);
};
//person.greet의 함수 이름은 greeting
*/

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("==========================");

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {}; //빈 객체 생성
console.log(typeof emptyObject) //object

const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function() {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function() {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();

//화살표 함수 사용하기
const animal2 = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: (animalName) => {
        console.log(`${animalName}: 멍멍 `);
    },
    thisFriends: (animalName, animalFriends) => {
        animalFriends.forEach(friend => {
            console.log(`${animalName}의 친구: ${friend}`);
            /*console.log(`&{this.animalName}`)
            this.animalName is undefined*/
        });
    },
};

console.log(animal2);
animal2.bark(animal2.animalName); 
animal2.thisFriends(animal2.animalName, animal2.animalFriends);