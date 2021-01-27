const mongoose = require('mongoose')

let db = () => {
	mongoose.connect('mongodb://localhost/mongodb', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
}

module.exports.db = db