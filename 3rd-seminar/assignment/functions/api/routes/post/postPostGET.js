const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const postings = require('../../../dbMockup/post');
const users = require('../../../dbMockup/users');

module.exports = async(req, res) => {
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.FIND_POST_SUCCESS, postings)
    );
};