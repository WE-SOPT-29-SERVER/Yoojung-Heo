//연산자

const num = 1;
const str = "1";

//==(동등연산자): 값만 비교
//== equal
//!= not equal
console.log(num == str);
//숫자와 문자를 비교할 때는 숫자를 문자로 변경
//==> "1" == "1"
console.log(num + str);
console.log(typeof(num + str));

console.log(Number(num) + Number(str));
console.log(String(num) + String(str));

//JS는 미리 타입을 지정해줄 수 없으므로, 타입을 예측할 수 없음
//문자와 숫자 타입이 정확하게 정해지지 않으므로 바꿔주는 과정을 거치자

//===(일치연산자): 값과 타입을 같이 비교
//=== equal
//!== not equal
//일반적으로 일치연산자 사용
console.log(num === str);

// console.log(typeof 1);
// console.log(typeof "str");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof Symbol(1));
console.log(typeof null);

console.log(null == undefined); //true
console.log(null === undefined); //false