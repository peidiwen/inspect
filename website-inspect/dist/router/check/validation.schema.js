"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdValidation = void 0;
// 原子化
const Id_Validator = {
    id: {
        errorMessage: "账户不可为空哦！",
        notEmpty: true,
    },
};
exports.IdValidation = Object.assign({}, Id_Validator);
