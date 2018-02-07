'use strict';
var url = require('url');
var User = require('./UserService');

module.exports.getUser = function getUser (req, res, next) {
    User.getUser (req.swagger.params, res, next);
};

module.exports.putUser = function putUser (req, res, next) {
    User.putUser (req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
    User.postUser (req.swagger.params, res, next);
};

module.exports.patchUser = function patchUser (req, res, next) {
    User.patchUser (req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
    User.deleteUser (req.swagger.params, res, next);
};

