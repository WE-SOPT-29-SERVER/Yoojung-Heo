//함수 선언식: 호이스팅에 영향을 받음
function funcName1 (params) {
    //logic
};

//함수 표현식: 호이스팅에 영향을 받지 않음
const funcName2 = function(params) {
    //logic
};

//ES6 이후 화살표 함수
const funcName3 = (params) => {
    //logic
};

const funcName4 = (x, y) => {
    return x + y;
};

const funcName5 = x => {
    return x;
};

constfuncName6 = () => {
    return 1;
};

//로직이 한 줄일 때 리턴 생략 가능
const add = (x, y) => x + y;

//매개변수가 하나일 때 매개변수 소괄호 생략 가능
const square = x => x * x;

//객체를 리턴하고 로직이 한줄일 때는 소괄호 ()로 감싸줘야 함
const person1 = (name, age) => ({name: name, age: age});

//위의 person1 함수는 아래와 동일
const person2 = function (name, age) {
    return {
        name: name,
        age: age,
    };
};
