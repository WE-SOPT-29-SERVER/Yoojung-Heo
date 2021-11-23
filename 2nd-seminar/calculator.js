const caculateFunc = {
    add : function add (a, b) {
        return a + b;
    },
    
    subtract: function subtract (a, b) {
        return a - b;
    },
    
    multiply: function multiply (a, b) {
        return a * b;
    },
    
    divide: function divide (a, b) {
        return a / b;
    },
}

module.exports = caculateFunc;

/*
const add = () => {}

const calculator = {
    add
}
value값과 key값의 이름이 같으면 value값 지정 안해도 ok
add: function add()랑 똑같음
*/

/*
module.exports = {
    add,
    subtract,
    multiply,
    divide,
}
*/