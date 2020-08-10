const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
    groupId: {
        type: String,
        default: "",
        index: true,
        unique: true
    },
    groupName: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    expenses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Expense'
        }
    ],
    createdOn: {
        type: Date,
        default: ""
    }

});

mongoose.model('Group', groupSchema);