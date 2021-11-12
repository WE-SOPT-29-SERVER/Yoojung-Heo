const express = require("express");
const router = express.Router();
const statusCode = require("./../constants/statusCode");
const responseMessage = require("./../constants/responseMessage");
const util = require("./../lib/util");

const users = require("./../dbMockup/users");
const { off } = require("../../../2nd-seminar/assignment/app");

router.get("/:id", async(req, res) => {
    const {id} = req.params;

    const getUser = users.filter(user => user.userID === id) [0];
    console.log(getUser);

    if(!getUser) { // 유저가 없는 경우
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    };


    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS,getUser.name)
    );
});

router.put("/:id", async(req, res) => {
    const {id} = req.params;
    const {newName} = req.body;

    existUser = users.filter(user => user.userID === id) [0];

    if(!existUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    };

    if(!newName) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    };

    existUser.name = newName;

    const updatedUser = {
        id: existUser.id,
        userID: existUser.userID,
        name: existUser.name,
        email: existUser.email
    };

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.UPDATE_PROFILE_SUCCESS, updatedUser));
});

router.delete('/:id', async(req, res) => {
    const {id} = req.params

    if(!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    };

    const existUser = users.filter(u => u.userID === id)[0];

    if(!existUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    };

    const newUsers = users.filter(u => u.userID != id)

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.DELETE_PROFILE_SUCCESS, newUsers)
    );
});

module.exports = router;