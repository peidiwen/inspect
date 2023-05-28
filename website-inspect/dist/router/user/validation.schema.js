"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidation = exports.FixUserValidation = exports.DeleteUserValidation = exports.AddUserValidation = void 0;
// 原子化
const Name_Validator = {
    name: {
        errorMessage: "用户名称不可为空哦！",
        notEmpty: true,
    },
};
const Account_Validator = {
    account: {
        errorMessage: "账户不可为空哦！",
        notEmpty: true,
    },
};
const Old_Account_Validator = {
    target: {
        errorMessage: "账户不可为空哦！",
        notEmpty: true,
    },
};
const Password_Validator = {
    password: {
        errorMessage: "密码不可为空哦！",
        notEmpty: true,
    },
};
const Role_Id_Validator = {
    role_id: {
        errorMessage: "角色 id 不可为空哦！",
        notEmpty: true,
        isInt: true,
    },
};
exports.AddUserValidation = Object.assign(Object.assign(Object.assign(Object.assign({}, Name_Validator), Account_Validator), Password_Validator), Role_Id_Validator);
exports.DeleteUserValidation = Object.assign({}, Account_Validator);
exports.FixUserValidation = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Name_Validator), Account_Validator), Password_Validator), Role_Id_Validator), Old_Account_Validator);
exports.LoginValidation = Object.assign(Object.assign({}, Account_Validator), Password_Validator);
