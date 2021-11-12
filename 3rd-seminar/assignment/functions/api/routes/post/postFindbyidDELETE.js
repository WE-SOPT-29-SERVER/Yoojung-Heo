const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const postings = require('../../../dbMockup/post');
const users = require('../../../dbMockup/users');

module.exports = async(req, res) => {
    const { id, userID } = req.params;

    // 파라미터 값이 비었을 때
    if (!id || !userID) {
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

    const newPostList = postings.filter(p => p.id != id)

    res.status(statusCode.OK).send(
        util.suceess(statusCode.OK, responseMessage.DELETE_POST_SUCCESS, newPostList)
    );

};