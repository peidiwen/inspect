"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../db/index"));
const index_sql_1 = require("../../db/sql/assigning/index.sql");
const config_1 = require("../../config");
const validation_schema_1 = require("./validation.schema");
const taskAssigning_1 = require("../../tool/taskAssigning");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
// 查询分配
router.get("/", (req, res, next) => {
    // 查询所有
    index_1.default.execute(index_sql_1.Query, (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
// 按账号查询
router.get("/by_account", (0, express_validator_1.checkSchema)(validation_schema_1.QueryAssigningValidation), (req, res, next) => {
    const { account } = req.query;
    index_1.default.execute(index_sql_1.QueryByAccount, [account], (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
router.get('/updateAssinging', (req, res, next) => {
    (0, taskAssigning_1.taskAssigning)();
    res.send({
        status: 200,
        message: "更新成功"
    });
});
exports.default = router;
