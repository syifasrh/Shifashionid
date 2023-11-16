const { User } = require('../models');
const { comparePass } = require('../helpers/bcrypt');
const { createToken, verifyToken } = require('../helpers/jwt');
const {OAuth2Client, JWT} = require('google-auth-library');

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
            if (!email) throw { name: "InvalidInput", field: "Email" };
            if (!password) throw { name: "InvalidInput", field: "Password" };

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

    static async googleAuth(req, res) {
        // The code would be in req.body.code
        // Here you would handle the code exchange for an access token and refresh token
        // Then use the tokens to get user info and create a user session
        // Finally, send back a session token or JWT to the frontend
        try {
            // console.log(req.body);
            console.log('aaaa');
            const { code } = req.body

            const client = new OAuth2Client();

            const ticket = await client.verifyIdToken({
                idToken: code,
                audience: process.env.GOOGLE_CLIENT_ID,
                // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            // const payload = ticket.getPayload()
            const { email, sub, password, providerId } = ticket.getPayload();

            // const userid = payload['sub'];
            // console.log(ticket);
            const user = await User.findOrCreate({ where: { email, username: sub, password: sub } });
            const createdToken = createToken({ id: user[0].id })

            // If request specified a G Suite domain:
            //   const domain = payload['hd'];

            res.status(200).json(createdToken);
        } catch (error) {
            console.log(error.message);
        }
    };
};

module.exports = UserController;