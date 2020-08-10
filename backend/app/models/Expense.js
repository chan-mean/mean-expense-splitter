const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let expenseSchema = new Schema({
    expenseId: {
        type: String,
        default: "",
        index: true,
        unique: true
    },
    expenseName: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        default: ""
    },
    transactionDate: {
        type: Date,
        default: ""
    },
    notes: {
        type: String,
        default: ""
    },
    createdOn: {
        type: Date,
        default: ""
    }

});

mongoose.model('Expense', expenseSchema);