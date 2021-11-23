if(true) {
    var x = "1";
    let y = "2";
    const z = "3";
}

console.log(x); //가능
//console.log(y); //불가
//console.log(z); //불가

//단 함수 스코프 안에서는 var 글로벌 x
function test(){
    if(true) {
        var testVar = 12;
    }
    console.log(testVar); //가능
}
//console.log(testVar); //불가
