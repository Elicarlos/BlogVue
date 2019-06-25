var express =  require('express')
var app =  express()
var BodyParser = require('body-parser')
var jwt = require ('jsonwebtoken')
var secretKey = 'senhasecreta'
var mogoose = require('mogoose')

mongoose.conect('mongodb+srv://BlogVue:@Server123@cluster0-catvf.mongodb.net/test?retryWrites=true&w=majority',function (err){
    if (err){ console.error('Erro !', + err)}
})

app.use(BodyParser.urlencoded({ extended: true}))
app.use(BodyParser.json())


var Post = require('./model/post')
var User = require('./model/user')

var router =  express.Router()