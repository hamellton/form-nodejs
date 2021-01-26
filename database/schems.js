const { Schema } = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: Number,
    message: String
})

module.exports = {
    userSchema
}