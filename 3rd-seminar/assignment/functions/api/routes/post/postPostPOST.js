const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const postings = require('../../../dbMockup/post');
const users = require('../../../dbMockup/users');

module.exports = async(req, res) => {
    const { userID, date, contents } = req.body;

    // request body가 잘못됐을 때
    if(!userID || !date || !contents) {
        res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    };

    // 없는 유저 아이디일 때
    const existUser = users.filter(obj => obj.userID === userID)
    if (existUser.length < 1) {
        res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER)
        );
    };

    const newPost = {
        id: postings.lenth + 1,
        userID,
        date,
        contents,
    };

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.POST_SUCCESS)
    );
};
