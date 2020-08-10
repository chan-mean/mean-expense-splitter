const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historySchema = new Schema({
    historyId: {
        type: String,
        default: "",
        index: true,
        unique: true
    },
    expenseId: {
        type: String,
        default: ""
    },
    expenseHistory: {
        type: String,
        default: ""
    },
    createdOn: {
        type: Date,
        default: ""
    }

});

mongoose.model('History', historySchema);