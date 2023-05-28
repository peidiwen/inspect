"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAssigningValidation = void 0;
// 原子化
const Account_Validator = {
    account: {
        errorMessage: "账户不可为空哦！",
        notEmpty: true,
    },
};
exports.QueryAssigningValidation = Object.assign({}, Account_Validator);
