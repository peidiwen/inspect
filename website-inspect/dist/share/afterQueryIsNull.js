"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 插入之前查询
// 场景：表空才插入
const index_1 = __importDefault(require("../db/index"));
function afterQueryIsNull(querySQL, callBack) {
    index_1.default.execute(querySQL, (err, results, fields) => {
        if (err)
            throw err;
        if (results.length === 0) {
            callBack();
        }
    });
}
exports.default = afterQueryIsNull;
