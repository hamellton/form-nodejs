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
const findSchema = new Schema({
    message: String,
    phone: Number 
})

module.exports = {
    userSchema,
    mailSchema,
    findSchema
}