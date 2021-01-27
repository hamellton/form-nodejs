const mongoose = require('mongoose')
const schems = require('./schems')

const User = mongoose.model('mongos', schems.userSchema)
// const Mail = mongoose.model('mongos', schems.mailSchema)
const modelFind = mongoose.model('mongos', schems.userSchema)

module.exports = modelFind
module.exports = User