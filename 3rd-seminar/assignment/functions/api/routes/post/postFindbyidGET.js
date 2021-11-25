const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const postings = require('../../../dbMockup/post');
const users = require('../../../dbMockup/users');

module.exports = async(req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    };

    const specificPost = postings.filter(p => p.id === id) [0];
    if(!specificPost) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.FIND_POST_NULL)
        );
    };

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.FIND_POST_SUCCESS, specificPost)
    );
};