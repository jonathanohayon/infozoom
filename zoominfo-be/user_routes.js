var _ = require('lodash');
var _questions = require('./data-service.js');
const fetch = require("node-fetch");
var User = require('./user_model.js');

module.exports = function (app) {
    const url = "https://opentdb.com/api.php?amount=10&type=multiple";
    let questions;
    const getQuestions = async url => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            questions = json.results;
            //console.log(json);
        } catch (error) {
            console.log(error);
        }
    };
    getQuestions(url);

    app.post('/user', function (req, res) {
        var newUser = new User(req.body);

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        newUser.save(function(err){
            if(err){
                res.json({info: 'error during user creation'})
            }
            res.json({info: 'user created'})
        });
    })
    app.get('/user', function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        User.find(function(err, users){
            if(err){
                res.json({info: 'error during users get'})
            }
            res.json({info: 'users found', data: users});
        });
    })

    app.get('/questions', function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(questions);             
    })




}