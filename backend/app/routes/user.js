const appConfig = require('../../config/appConfig');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUsers);

    app.post(`${baseUrl}/signup`, userController.signUp);

    app.post(`${baseUrl}/login`, userController.logIn);

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logOut);

    app.post(`${baseUrl}/forgotpassword`, userController.sendMail);

    app.post(`${baseUrl}/verifycode`, userController.verifyCode);

    app.post(`${baseUrl}/updatepassword`, userController.findEmailAndUpdatePassword);

}