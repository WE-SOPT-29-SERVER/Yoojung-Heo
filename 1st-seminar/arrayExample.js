let arr1 = [];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

//배열 안에 모든 타입의 변수가 들어갈 수 있음
let arr3 = ["허유정", 1, 2, 3, null, {name: "youjung", age:20}];
console.log(arr3);
console.log(typeof arr3);
console.log(typeof arr3[5]);


/* 
배열 prototype 메서드 
*/

console.log("*** Array 기본 함수들을 알아보자 ***");
let arr = [1, 2, 3, 4];

//2-1 length
console.log(`arr의 길이: ${arr.length}`);

//2-2 push, pop
arr.push("new item");
console.log("arr push: ", arr); //[1, 2, 3, 4, 'new item']
arr.pop();
console.log("arr pop: ", arr); //[1, 2, 3, 4]

//2-3 shift, unshift
arr.unshift("first item");
console.log("arr unshift: ", arr); //['first item', 1, 2, 3, 4]
arr.shift();
console.log("arr shift: ", arr); //[1, 2, 3, 4]

//2-4 includes
console.log("arr.includes(4): ", arr.includes(4)); //true
console.log("arr.includes(100): ", arr.includes(100)); //false

//2-5 indexOf
console.log("arr.indexOf(4): ", arr.indexOf(4));
console.log("arr.indexOf(100): ", arr.indexOf(100)); //-1

//2-6 concat 배열을 합쳐줌
let arr10 = [1, 2, 3];
let arr20 = [4, 5, 6];
let concatArr = arr10.concat(arr20);
console.log("arr10.concat(arr20): ", concatArr);

//2-7 join
let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("->")); //"서울->대전->대구->부산"

//2-8 reverse
console.log(location.reverse().join("->")); //"부산->대구->대전->서울"

//2-9 sort
let countries = ["Androrra", "Vietnam", "Osterreich"];

/*
첫번째 인수가 두번째 인수보다 작을 경우: -값
두 인수가 같을 경우: 0
첫번째 인수가 두번째 인수보다 클 경우: +값
*/


//first(boolean) ? true : false

console.log(countries.sort((a,b) => (a > b ? 1 : -1)));
console.log(
    countries.sort(function (a, b) {
        return a.localeCompare(b);
    })
);  //유니코드 기준 정렬

console.log(
    "오름차순 정렬: ",
    concatArr.sort((a, b) => a - b)
);

console.log(
    "내림차순 정렬: ",
    concatArr.sort(function (a, b){
        return b - a;
    })
);

//2-10 filter: 배열 요소 전체를 대상으로 조건을 걸어서 그 조건을 충족하는 새로운 배열 return 
let number = [100, 234, -125, 1 ,23, 3555, -433, 0];
let minusNumber = number.filter(item => item < 0);
console.log("minusNumber: ", minusNumber);

//2-11 map: 배열 요서 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배열로 반환할 때 주로 사용
countries = ["Korea", "USA", "China", "Russia", "Vietnam"];
let countriesLengths = countries.map(item => item.length);
console.log("countriesLengths: ", countriesLengths);

//2-12 reduce: map은 배열을 반환할 때, reduce는 값 하나를 반환할 떄 주로 사용
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = number.reduce((previousValue, currentValue) => {
    console.log(`previous value: ${previousValue}, current value: ${currentValue}`);
    return previousValue+currentValue;
});

console.log("sum: ", sum);

/*
----------------
  3. 배열 순회
----------------
*/

let serverPart = [
    "강한희",
    "고성용",
    "구건모",
    "권세훈",
    "김영권",
    "김은지",
    "김진욱",
];

let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. ';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ ';

for (let item in serverPart) {
    serverIndexStr += item + "! ";
    //for in: 열거형 속성을 가지고 있는 객체의 속성이름
};
console.log(serverIndexStr);

for (let item of serverPart) {
    serverPartMemberNameStr += item + "! ";
    //for of: 열거 가능한(iterable) 속성이 있는 객체의 속성값
};
console.log(serverPartMemberNameStr);

serverPart.forEach(item => {
    console.log(item);
});


/*
-----------------------
for in/of 예제

const Str = "hello";
for (let item in Str) {
    console.log(item);
    // 1 2 3 4 5
};

for(let item of Str) {
    console.log(item);
    // h e l l o
};
-----------------------
*/