const { verifyToken } = require('../helpers/jwt');
const { Order } = require('../models');

const authentication = async (req, res, next) => {
    try {
        const { Authorization } = req.headers;
        if (!Authorization) throw { name: "Unauthorized", message: "Please Login First" };

        const token = Authorization.split(' ')[1];
        if (Authorization.split(' ')[0] !== "Bearer") {
            throw { name: "Unauthorized", message: "Please Login First" }
        };

        if (!token) throw { name: "Unauthorized", message: "Invalid Token" };

        const { id, username, email } = verifyToken(token);
        req.user = { id, username, email }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { authentication };