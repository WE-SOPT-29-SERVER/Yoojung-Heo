const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const postings = require('../../../dbMockup/post');
const users = require('../../../dbMockup/users');

module.exports = async(req, res) => {
    const { id, userID, contents } = req.body;

    if (!id || !userID || !contents) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    };

    // 포스트의 고유 아이디가 존재하지 않을 때
    const existPost = postings.filter(p => p.id === id) [0];
    if(!existPost) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.FIND_POST_NULL)
        );
    };

    // 포스트의 작성자 아이디가 다를 때
    if(userID != existPost.userID) {
        return res.status(statusCode.UNAUTHORIZED).send(
            util.fail(statusCode.UNAUTHORIZED, responseMessage.UNAUTHORIZED)
        );
    };

    newPost = {
        id,
        userID,
        date: existPost.date,
        contents,
    };

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.FIND_POST_SUCCESS, newPost)
    );
};