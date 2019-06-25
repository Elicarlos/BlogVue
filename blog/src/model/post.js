var mongoose = require('mogoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
    title: String,
    author: String,
    body: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now}
})

module.exports = mogoose.model('Post', postSchema)