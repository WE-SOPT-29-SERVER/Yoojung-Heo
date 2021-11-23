//hoisting: 항상 선언부가 위로 끌여올려진다 할당은 원래 위치에서
//한수 선언식과 var 변수 선언에 해당된다.
hoistFunction();

function hoistFunction() {
    console.log(x);
    //console.log(y); //hoisting 대상이 아니기 때문에 에러
    var x = "var";
    let y = "var2";
    console.log(x);
}

//var를 쓰지 말자! let과 const를 쓰자