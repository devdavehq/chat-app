import { Schema, model } from 'mongoose';

let account_schem = new Schema({
    accountType: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    description: {
        type: String,
    },
    chatToken: {
        type: String,
        unique: true,
    },
}, { timestamps: true })

const createAcc = model('user', account_schem)

export default createAcc