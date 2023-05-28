"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function errorHandler(req, res, callback) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ message: "发生校验错误喽", errors: errors.array() });
    }
    callback();
}
exports.default = errorHandler;
