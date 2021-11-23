//콜백함수 연습

function cook (callback, timeout) {
    setTimeout(callback, timeout);
}



cook(function() {
    console.log("콜백함수 1");
    cook(function() {
        console.log("콜백함수 2");
    }, 2000)
},3000);

console.log("콜백함수 아님");