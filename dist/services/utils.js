"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = exports.notFound = exports.internalServerError = exports.badRequest = void 0;
var badRequest = function (res, err) {
    res.status(400).json({
        err: err
    });
};
exports.badRequest = badRequest;
var internalServerError = function (res, err) {
    res.status(500).json({
        err: err.message
    });
};
exports.internalServerError = internalServerError;
var notFound = function (res) {
    res.sendStatus(404);
};
exports.notFound = notFound;
var validateNumber = function (num) { return !(parseFloat(num) > 0); };
exports.validateNumber = validateNumber;
