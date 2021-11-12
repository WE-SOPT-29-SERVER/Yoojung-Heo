const express = require("express");
const router = express.Router();
const statusCode = require("./../constants/statusCode");
const responseMessage = require("./../constants/responseMessage");
const util = require("./../lib/util");

const users = require("./../dbMockup/users");

//  /user/signup
router.post("/signup", async (req, res) => {
    // email, password

    // const myName = req.body.name;
    // const myEmail = req.body.email;
    // const myPassword = req.body.password;

    //destructure assignment
    //비구조화 할당 - 변수명 설정 가능
    //위의 구조와 동일
    const {name, email, password} = req.body;
    //const {name: myName}

    // request body가 잘못됐을 때
    if(!email || !name || !password) {
        return res
            .status(400)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    };


    // 해당 이메일을 가진 유저가 이미 있을 때
    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    if(alreadyUser) {
        return res
            .status(400)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
    };

    const newUser = {
        id: users.length +1, 
        name, 
        password, 
        email
    };

    res.status(200).send(
        util.success(statusCode.OK, responseMessage.CREATED_USER, newUser)
    );
});

// query: /user?age
// param: /user/4

// util 사용해서 response 전송
router.post("/login", async(req, res) => {
    
    const {email, password} = req.body;

    if(!email || !password) { // null value
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER)
            )
    };

    const user = users.filter(user => user.email === email)[0];

    if(!user) { // 유저가 존재하지 않는 경우
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER))
    };

    if(user.password != password) { // 패스워드가 틀린 경우
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW))
    };

    res.statusCode(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data)
    );

});


// 유저 검색 히스토리 저장
// serch?keyword=principles

// 1. 검색 결과 반환
// res.sratus().send()

// 2. 검색 히스토리 저장

module.exports = router;
