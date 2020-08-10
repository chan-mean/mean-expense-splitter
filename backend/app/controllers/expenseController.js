const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib');
const check = require('../libs/checkLib');
const logger = require('../libs/loggerLib');
const response = require('../libs/responseLib');
const mail = require('../libs/mailLib');
const async = require('async');
let schedule = require('node-schedule');
let jobs = [];

const ExpenseModel = mongoose.model('Expense');
const AmountModel = mongoose.model('Amount');
const GroupModel = mongoose.model('Group');
const HistoryModel = mongoose.model('History');
const UserModel = mongoose.model('User');


let getAllExpensesByGroup = (req, res) => {
    let getGroupDetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.groupId)) {
                let apiResponse = response.generate(true, "groupId parameter is missing", 403, null)
                reject(apiResponse)
            } else {
                GroupModel.findOne({ groupId: req.params.groupId }, (error, result) => {
                    if (error) {
                        logger.error(error.message, "expenseController.getGroupDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to load all group details", 500, null);
                        reject(apiResponse);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    }
    let getExpenseDetails = (groupDetails) => {
        return new Promise((resolve, reject) => {
            ExpenseModel.find({ _id: { $in: groupDetails.expenses } }).select('-__v -_id').lean().exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.getExpenseDetails()", 10);
                    let apiResponse = response.generate(true, "Failed to load all expenses", 500, null);
                    reject(apiResponse);
                } else {
                    resolve(result);
                }
            });
        });
    }
    getGroupDetails(req, res).then(getExpenseDetails).then((result) => {
        let apiResponse = response.generate(false, "All Expenses fetched successfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let createExpenseAndAmount = (req, res) => {
    let newExpenseObj;
    let createExpense = () => {
        return new Promise((resolve, reject) => {
            let newExpense = new ExpenseModel({
                expenseId: shortId.generate(),
                expenseName: req.body.expenseName,
                category: req.body.category,
                amount: req.body.amount,
                transactionDate: req.body.transactionDate,
                notes: req.body.notes,
                createdOn: time.now()
            });
            newExpense.save((error, newExpense) => {
                if (error) {
                    logger.error(error.message, "expenseController.createExpense()", 10);
                    let apiResponse = response.generate(true, "Failed to create new expense", 500, null);
                    reject(apiResponse);
                }
                else {
                    newExpenseObj = newExpense.toObject();
                    resolve(newExpenseObj);
                }
            });
        });
    }
    let addExpenseRefToGroup = (expenseDetails) => {
        return new Promise((resolve, reject) => {
            GroupModel.updateOne({ groupId: req.body.groupId },
                { $push: { expenses: expenseDetails } }
                , (error, result) => {
                    if (error) {
                        logger.error(error.message, "expenseController.addExpenseRefToGroup()", 10);
                        let apiResponse = response.generate(true, "Failed to add expense reference to the group", 500, null);
                        reject(apiResponse);
                    } else if (check.isEmpty(result)) {
                        logger.info("No group found", "expenseController.addExpenseRefToGroup()");
                        let apiResponse = response.generate(true, "No group found", 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(result);
                    }
                });
        });
    }
    let addAmountDetails = () => {
        return new Promise((resolve, reject) => {
            let borrowingData = req.body.borrowingData;
            async.each(JSON.parse(borrowingData), (data, callback) => {
                let newAmount = new AmountModel({
                    amountId: shortId.generate(),
                    expenseId: newExpenseObj.expenseId,
                    groupId: req.body.groupId,
                    lendingUserId: req.body.lendingUserId,
                    borrowingUserId: data.borrowingUserId,
                    lendingAmount: req.body.lendingAmount,
                    borrowingAmount: data.borrowingAmount,
                    createdOn: time.now()
                });
                newAmount.save((error, newAmount) => {
                    if (error) {
                        logger.error(error.message, "expenseController.addAmountDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to add amount details", 500, null);
                        reject(apiResponse);
                    }
                    else {
                        resolve(JSON.parse(borrowingData));
                    }
                });
            });
        });
    }
    let draftMail = (userDetails) => {
        return new Promise((resolve, reject) => {
            async.each(userDetails, (data, callback) => {
                let mailOptions = {
                    from: '"Expense Manager" <expensemanager@email.com>',
                    to: data.emailAddress,
                    subject: newExpenseObj.expenseName,
                    text: `You have been added to the expense`,
                    html: `You have been added to the expense`,
                }
                resolve(mailOptions);
            });
        });
    }
    let addExpenseToHistory = () => {
        return new Promise((resolve, reject) => {
            let newHistory = new HistoryModel({
                historyId: shortId.generate(),
                expenseId: newExpenseObj.expenseId,
                expenseHistory: req.body.expenseHistory,
                createdOn: time.now()
            });
            newHistory.save((error, newHistory) => {
                if (error) {
                    logger.error(error.message, "expenseController.addExpenseToHistory()", 10);
                    let apiResponse = response.generate(true, "Failed to create new expense history", 500, null);
                    reject(apiResponse);
                }
                else {
                    resolve(newHistory.toObject());
                }
            });
        });
    }
    createExpense(req, res).then(addExpenseRefToGroup).then(addAmountDetails).then(getUserDetails).then(draftMail).then(mail.sendMail).then(addExpenseToHistory).then((result) => {
        let apiResponse = response.generate(false, "Expense created and added amount sucessfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let getAmountDetailsByExpense = (req, res) => {
    if (check.isEmpty(req.params.expenseId)) {
        let apiResponse = response.generate(true, "expenseId parameter is missing", 403, null)
        res.send(apiResponse)
    } else {
        AmountModel.find({ expenseId: req.params.expenseId }, (error, result) => {
            if (error) {
                logger.error(error.message, "expenseController.getAmountDetailsByExpense()", 10);
                let apiResponse = response.generate(true, "Failed to load all amount details", 500, null);
                res.send(apiResponse);
            } else {
                let apiResponse = response.generate(false, "Amount Details fetched successfully", 200, result);
                res.send(apiResponse);
            }
        });
    }
}

let getExpenseDetails = (req, res) => {
    if (check.isEmpty(req.params.expenseId)) {
        let apiResponse = response.generate(true, "expenseId parameter is missing", 403, null)
        res.send(apiResponse)
    } else {
        ExpenseModel.findOne({ expenseId: req.params.expenseId }, (error, result) => {
            if (error) {
                logger.error(error.message, "expenseController.getExpenseDetails()", 10);
                let apiResponse = response.generate(true, "Failed to load all expense details", 500, null);
                res.send(apiResponse);
            } else {
                let apiResponse = response.generate(false, "Expense Details fetched successfully", 200, result);
                res.send(apiResponse);
            }
        });
    }
}

let updateExpenseAndAmount = (req, res) => {
    let options = req.body;
    let updateExpenseDetails = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.updateOne({ expenseId: req.body.expenseId }, options, { multi: true }).exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.updateExpenseDetails()", 10)
                    let apiResponse = response.generate(true, 'Error occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info("No expense found", "expenseController.updateExpenseDetails()");
                    let apiResponse = response.generate(true, "No expense found", 404, null)
                    reject(apiResponse)
                } else {
                    resolve(options);
                }
            });
        });
    }

    let deleteExistingAmountDetails = () => {
        return new Promise((resolve, reject) => {
            AmountModel.deleteMany({ expenseId: req.body.expenseId }).exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.deleteExistingAmountDetails()", 10);
                    let apiResponse = response.generate(true, `Error occured: ${error.message}`, 500, null);
                    reject(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No amount found", "expenseController.deleteExistingAmountDetails()");
                    let apiResponse = response.generate(true, "No amount found", 404, null);
                    reject(apiResponse);
                } else {
                    resolve(result);
                }
            });
        });
    }

    let addNewAmountDetails = () => {
        return new Promise((resolve, reject) => {
            let borrowingData = req.body.borrowingData;
            async.each(JSON.parse(borrowingData), (data, callback) => {
                let newAmount = new AmountModel({
                    amountId: shortId.generate(),
                    expenseId: req.body.expenseId,
                    groupId: req.body.groupId,
                    lendingUserId: req.body.lendingUserId,
                    borrowingUserId: data.borrowingUserId,
                    lendingAmount: req.body.lendingAmount,
                    borrowingAmount: data.borrowingAmount,
                    createdOn: time.now()
                });
                newAmount.save((error, newAmount) => {
                    if (error) {
                        logger.error(error.message, "expenseController.addNewAmountDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to add amount details", 500, null);
                        reject(apiResponse);
                    }
                    else {
                        resolve(JSON.parse(borrowingData));
                    }
                });
            });
        });
    }
    let draftMail = (userDetails) => {
        return new Promise((resolve, reject) => {
            async.each(userDetails, (data, callback) => {
                let mailOptions = {
                    from: '"Expense Manager" <expensemanager@email.com>',
                    to: data.emailAddress,
                    subject: options.expenseName,
                    text: `Expense has been updated`,
                    html: `Expense has been updated`,
                }
                resolve(mailOptions);
            });
        });
    }

    let addHistoryDetails = () => {
        return new Promise((resolve, reject) => {
            let expenseHistoryData = req.body.expenseHistoryData;
            async.each(JSON.parse(expenseHistoryData), (data, callback) => {
                let newHistory = new HistoryModel({
                    historyId: shortId.generate(),
                    expenseId: req.body.expenseId,
                    expenseHistory: data,
                    createdOn: time.now()
                });
                newHistory.save((error, newHistory) => {
                    if (error) {
                        logger.error(error.message, "expenseController.addHistoryDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to create new expense history", 500, null);
                        reject(apiResponse);
                    }
                    else {
                        resolve(callback);
                    }
                });
            });
        });
    }

    updateExpenseDetails(req, res).then(deleteExistingAmountDetails).then(addNewAmountDetails).then(getUserDetails).then(draftMail).then(mail.sendMail).then(addHistoryDetails).then((result) => {
        let apiResponse = response.generate(false, "Expense updated and modified amount details sucessfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let deleteExpenseAndAmount = (req, res) => {

    let amountDetails;
    let getAmountDetails = () => {
        return new Promise((resolve, reject) => {
            AmountModel.find({ expenseId: req.body.expenseId }).exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.getAmountDetails()", 10);
                    let apiResponse = response.generate(true, `Error occured: ${error.message}`, 500, null);
                    reject(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No amount found", "expenseController.getAmountDetails()");
                    let apiResponse = response.generate(true, "No amount found", 404, null);
                    reject(apiResponse);
                } else {
                    amountDetails = result;
                    resolve(result);
                }
            });
        });
    }

    let deleteAmount = () => {
        return new Promise((resolve, reject) => {
            AmountModel.deleteMany({ expenseId: req.body.expenseId }).exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.deleteAmount()", 10);
                    let apiResponse = response.generate(true, `Error occured: ${error.message}`, 500, null);
                    reject(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No amount found", "expenseController.deleteAmount()");
                    let apiResponse = response.generate(true, "No amount found", 404, null);
                    reject(apiResponse);
                } else {
                    resolve(result);
                }
            });
        });
    }

    let draftMail = (userDetails) => {
        return new Promise((resolve, reject) => {
            async.each(userDetails, (data, callback) => {
                let mailOptions = {
                    from: '"Expense Manager" <expensemanager@email.com>',
                    to: data.emailAddress,
                    subject: req.body.expenseName,
                    text: `Expense has been deleted`,
                    html: `Expense has been deleted`,
                }
                resolve(mailOptions);
            });
        });
    }

    let deleteExpense = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.findOneAndRemove({ expenseId: req.body.expenseId }).exec((error, result) => {
                if (error) {
                    logger.error(error.message, "expenseController.deleteExpense()", 10);
                    let apiResponse = response.generate(true, `Error occured: ${error.message}`, 500, null);
                    reject(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No meeting found", "expenseController.deleteExpense()");
                    let apiResponse = response.generate(true, "No expense found", 404, null);
                    reject(apiResponse);
                } else {
                    resolve(amountDetails);
                }
            });
        });
    }

    getAmountDetails(req, res).then(deleteAmount).then(deleteExpense).then(getUserDetails).then(draftMail).then(mail.sendMail).then((result) => {
        let apiResponse = response.generate(false, "Expense and amount deleted sucessfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let getHistoryDetailsByExpense = (req, res) => {
    if (check.isEmpty(req.params.expenseId)) {
        let apiResponse = response.generate(true, "expenseId parameter is missing", 403, null)
        res.send(apiResponse)
    } else {
        HistoryModel.find({ expenseId: req.params.expenseId }, (error, result) => {
            if (error) {
                logger.error(error.message, "expenseController.getHistoryDetailsByExpense()", 10);
                let apiResponse = response.generate(true, "Failed to load all history details", 500, null);
                res.send(apiResponse);
            } else {
                let apiResponse = response.generate(false, "History Details fetched successfully", 200, result);
                res.send(apiResponse);
            }
        });
    }
}

function getUserDetails(amountData) {
    let userIds = [];
    amountData.forEach(x => userIds.push(x.borrowingUserId));
    return new Promise((resolve, reject) => {
        UserModel.find({ userId: { $in: userIds } }, (error, result) => {
            if (error) {
                logger.error(error.message, "expenseController.getUserDetails()", 10);
                let apiResponse = response.generate(true, "Failed to get user details", 500, null);
                reject(apiResponse);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getAllExpensesByGroup: getAllExpensesByGroup,
    createExpenseAndAmount: createExpenseAndAmount,
    getAmountDetailsByExpense: getAmountDetailsByExpense,
    getExpenseDetails: getExpenseDetails,
    updateExpenseAndAmount: updateExpenseAndAmount,
    deleteExpenseAndAmount: deleteExpenseAndAmount,
    getHistoryDetailsByExpense: getHistoryDetailsByExpense
}