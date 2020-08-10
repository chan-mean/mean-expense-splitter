const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib');
const check = require('../libs/checkLib');
const logger = require('../libs/loggerLib');
const response = require('../libs/responseLib');
const mail = require('../libs/mailLib');
let schedule = require('node-schedule');
let jobs = [];

const GroupModel = mongoose.model('Group');
const UserModel = mongoose.model('User');
const AmountModel = mongoose.model('Amount');

let getAllGroupsbyUser = (req, res) => {
    let getUserDetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.userId)) {
                let apiResponse = response.generate(true, "userId parameter is missing", 403, null)
                reject(apiResponse)
            } else {
                UserModel.findOne({ userId: req.params.userId }, (error, result) => {
                    if (error) {
                        logger.error(error.message, "groupController.getUserDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to load all user details", 500, null);
                        reject(apiResponse);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    }
    let getGroupDetails = (userDetails) => {
        return new Promise((resolve, reject) => {
            GroupModel.find({ _id: { $in: userDetails.groups } }).select('-__v -_id').lean().exec((error, result) => {
                if (error) {
                    logger.error(error.message, "groupController.getGroupDetails()", 10);
                    let apiResponse = response.generate(true, "Failed to load all groups", 500, null);
                    reject(apiResponse);
                } else {
                    resolve(result);
                }
            });
        });
    }
    getUserDetails(req, res).then(getGroupDetails).then((result) => {
        let apiResponse = response.generate(false, "All Groups fetched successfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let addUserWithGroupOperations = (req, res) => {
    let newGroupObj, groupId = req.params.groupId, groupObj;
    let createOrGetGroupDetails = () => {
        if (req.params.groupId === '0') {
            return new Promise((resolve, reject) => {
                let newGroup = new GroupModel({
                    groupId: shortId.generate(),
                    groupName: req.body.groupName,
                    category: req.body.category,
                    description: req.body.description,
                    createdOn: time.now()
                });
                newGroup.save((error, newGroup) => {
                    if (error) {
                        logger.error(error.message, "groupController.createOrGetGroupDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to create new group", 500, null);
                        reject(apiResponse);
                    }
                    else {
                        newGroupObj = newGroup.toObject();
                        groupObj = newGroupObj;
                        resolve(newGroupObj);
                    }
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                if (check.isEmpty(req.params.groupId)) {
                    let apiResponse = response.generate(true, "groupId parameter is missing", 403, null)
                    reject(apiResponse)
                } else {
                    GroupModel.findOne({ groupId: req.params.groupId }, (error, result) => {
                        if (error) {
                            logger.error(error.message, "groupController.createOrGetGroupDetails()", 10);
                            let apiResponse = response.generate(true, "Failed to load all group details", 500, null);
                            reject(apiResponse);
                        } else {
                            groupObj = result;
                            resolve(result);
                        }
                    });
                }
            });
        }
    }
    let addGroupRefToUser = (groupDetails) => {
        return new Promise((resolve, reject) => {
            UserModel.updateOne({ userId: req.body.userId },
                { $push: { groups: groupDetails } }
                , (error, result) => {
                    if (error) {
                        logger.error(error.message, "groupController.addGroupRefToUser()", 10);
                        let apiResponse = response.generate(true, "Failed to add group reference to the user", 500, null);
                        reject(apiResponse);
                    } else if (check.isEmpty(result)) {
                        logger.info("No user found", "groupController.addGroupRefToUser()");
                        let apiResponse = response.generate(true, "No user found", 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(result);
                    }
                });
        });
    }
    let getUserDetails = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ userId: req.body.userId }, (error, result) => {
                if (error) {
                    logger.error(error.message, "groupController.getUserDetails()", 10);
                    let apiResponse = response.generate(true, "Failed to load all user details", 500, null);
                    reject(apiResponse);
                } else {
                    resolve(result);
                }
            });
        });
    }
    let addUserRefToGroup = (userDetails) => {
        return new Promise((resolve, reject) => {
            if (req.params.groupId === '0') groupId = newGroupObj.groupId;
            GroupModel.updateOne({ groupId: groupId },
                { $push: { users: userDetails } }
                , (error, result) => {
                    if (error) {
                        logger.error(error.message, "groupController.addUserRefToGroup()", 10);
                        let apiResponse = response.generate(true, "Failed to add user reference to the group", 500, null);
                        reject(apiResponse);
                    } else if (check.isEmpty(result)) {
                        logger.info("No group found", "groupController.addUserRefToGroup()");
                        let apiResponse = response.generate(true, "No group found", 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(groupObj);
                    }
                });
        })
    }
    createOrGetGroupDetails(req, res).then(addGroupRefToUser).then(getUserDetails).then(addUserRefToGroup).then((result) => {
        let apiResponse = response.generate(false, "Group created and added user sucessfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let getUsersByGroup = (req, res) => {
    let getGroupDetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.groupId)) {
                let apiResponse = response.generate(true, "groupId parameter is missing", 403, null)
                reject(apiResponse)
            } else {
                GroupModel.findOne({ groupId: req.params.groupId }, (error, result) => {
                    if (error) {
                        logger.error(error.message, "groupController.getGroupDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to load all group details", 500, null);
                        reject(apiResponse);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    }
    let getUserDetails = (groupDetails) => {
        let usersInGroupInd = req.params.usersInGroup, groupCondition;
        if (usersInGroupInd === 'Y') groupCondition = { $in: groupDetails.users }
        else groupCondition = { $nin: groupDetails.users };
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.usersInGroup)) {
                let apiResponse = response.generate(true, "usersInGroup parameter is missing", 403, null)
                reject(apiResponse)
            } else {
                UserModel.find({ _id: groupCondition }).select('-__v -_id').lean().exec((error, result) => {
                    if (error) {
                        logger.error(error.message, "groupController.getUserDetails()", 10);
                        let apiResponse = response.generate(true, "Failed to load users", 500, null);
                        reject(apiResponse);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    }
    getGroupDetails(req, res).then(getUserDetails).then((result) => {
        let apiResponse = response.generate(false, "Users fetched successfully", 200, result);
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error);
    });
}

let getAmountDetailsByGroup = (req, res) => {
    if (check.isEmpty(req.params.groupId)) {
        let apiResponse = response.generate(true, "groupId parameter is missing", 403, null)
        res.send(apiResponse)
    } else {
        AmountModel.find({ groupId: req.params.groupId }, (error, result) => {
            if (error) {
                logger.error(error.message, "groupController.getAmountDetailsByGroup()", 10);
                let apiResponse = response.generate(true, "Failed to load all amount details", 500, null);
                res.send(apiResponse);
            } else {
                let apiResponse = response.generate(false, "Amount Details fetched successfully", 200, result);
                res.send(apiResponse);
            }
        });
    }
}


module.exports = {
    getAllGroupsbyUser: getAllGroupsbyUser,
    addUserWithGroupOperations: addUserWithGroupOperations,
    getUsersByGroup: getUsersByGroup,
    getAmountDetailsByGroup: getAmountDetailsByGroup
}