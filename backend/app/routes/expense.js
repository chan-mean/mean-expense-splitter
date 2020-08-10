const appConfig = require('../../config/appConfig');
const expenseController = require('../controllers/expenseController');
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/expenses`;

    app.get(`${baseUrl}/:groupId/view/all`, auth.isAuthorized, expenseController.getAllExpensesByGroup);

    app.post(`${baseUrl}/create`, auth.isAuthorized, expenseController.createExpenseAndAmount);

    app.get(`${baseUrl}/:expenseId/view/amount`, auth.isAuthorized, expenseController.getAmountDetailsByExpense);

    app.get(`${baseUrl}/:expenseId/view`, auth.isAuthorized, expenseController.getExpenseDetails);

    app.post(`${baseUrl}/update`, auth.isAuthorized, expenseController.updateExpenseAndAmount);

    app.post(`${baseUrl}/delete`, auth.isAuthorized, expenseController.deleteExpenseAndAmount);

    app.get(`${baseUrl}/:expenseId/history`, auth.isAuthorized, expenseController.getHistoryDetailsByExpense);
}