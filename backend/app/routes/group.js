const appConfig = require('../../config/appConfig');
const groupController = require('../controllers/groupController');
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/groups`;

    app.get(`${baseUrl}/:userId/view/all`, auth.isAuthorized, groupController.getAllGroupsbyUser);

    app.post(`${baseUrl}/users/add/:groupId`, auth.isAuthorized, groupController.addUserWithGroupOperations);

    app.get(`${baseUrl}/:groupId/view/users/:usersInGroup`, auth.isAuthorized, groupController.getUsersByGroup);

    app.get(`${baseUrl}/:groupId/balances`, auth.isAuthorized, groupController.getAmountDetailsByGroup);
    

}