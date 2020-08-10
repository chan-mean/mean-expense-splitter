const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let amountSchema = new Schema({
    amountId: {
        type: String,
        default: "",
        index: true,
        unique: true
    },
    expenseId: {
        type: String,
        default: ""
    },
    groupId: {
        type: String,
        default: ""
    },
    lendingUserId: {
        type: String,
        default: ""
    },
    borrowingUserId: {
        type: String,
        default: ""
    },
    lendingAmount: {
        type: String,
        default: ""
    },
    borrowingAmount: {
        type: String,
        default: ""
    },
    createdOn: {
        type: Date,
        default: ""
    }

});

mongoose.model('Amount', amountSchema);