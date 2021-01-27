const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: Number,
    message: String
})

const mailSchema = new Schema({
    email: String
})

module.exports = {
    userSchema,
    mailSchema
}