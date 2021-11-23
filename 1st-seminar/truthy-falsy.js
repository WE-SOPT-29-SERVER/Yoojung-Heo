const num1 = 1;
const num2 = 2;
const str = "2";

//2 -> "2"

const bool = true;

console.log(num1 == bool); //true
//1 -> true

console.log(num2 == bool); //false

//Truthy
//대충 true다

console.log(Boolean(10));
console.log(Boolean(-1));
console.log(Boolean('문자'));
console.log(Boolean(true));

//빈 객체와 빈 배열도 truthy
console.log(Boolean({}));
console.log(Boolean([]));

//Falsy
//대충 false다

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

//빈 문자열은 falsy
console.log(Boolean(''));

//=> 이 값이 있는지 없는지를 검사하는 가장 확실한 방법

const post = await postsGet()

if (!post){
    //logic
}

//쿼리문에서 ${null} (null), ${undefined}(?) 는 다르다
//undefined는 쓰지 말고 null을 씁시다
