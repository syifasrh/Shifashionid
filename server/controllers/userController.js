const { User } = require('../models');
const { comparePass } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class UserController {
    static async register(req, res, next) {
        try {
            const user = await User.create(req.body);
            res
                .status(201)
                .json({ message: `${user.username} with email ${user.email} has been created` });
        } catch (error) {
            next(error);
        }
    };

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) throw { name: "InvalidInput", field: "email" };
            if (!password) throw { name: "InvalidInput", field: "password" };

            const user = await User.findOne({
                where: { email }
            });

            if (!user) throw { name: "Unauthenticated" };
            if (!comparePass(password, user.password)) throw { name: "Unauthenticated" };

            const access_token = createToken({ id: user.id, username: user.username, email: user.email });
            res.status(200).json({ access_token, username: user.username, email: user.email });
        } catch (error) {
            if (error.name === "InvalidInput") {
                res.status(400).json({ message: `${error.field} cannot empty` });
            } else {
                next(error);
            }
        }
    };
};

module.exports = UserController;