"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddValidation = void 0;
// 原子化
const Web_Id_Validator = {
    web_id: {
        errorMessage: "web_id 不可空",
        notEmpty: true,
    },
};
const Status_Id_Validator = {
    status_id: {
        errorMessage: "status_id 不可为空哦！",
        notEmpty: true,
    },
};
const Message_Validator = {
    message: {
        errorMessage: "Message 不可为空哦！",
    },
};
const Account_Validator = {
    account: {
        errorMessage: "Account 不可为空哦！",
    },
};
exports.AddValidation = Object.assign(Object.assign(Object.assign(Object.assign({}, Message_Validator), Status_Id_Validator), Web_Id_Validator), Account_Validator);
