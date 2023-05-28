"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../db/index"));
const index_sql_1 = require("../../db/sql/log/index.sql");
const config_1 = require("../../config");
const express_validator_1 = require("express-validator");
const validation_schema_1 = require("./validation.schema");
const errHandler_tool_1 = __importDefault(require("../../tool/errHandler.tool"));
const router = express_1.default.Router();
// 添加日志
router.post("/", (0, express_validator_1.checkSchema)(validation_schema_1.AddValidation), (req, res, next) => {
    (0, errHandler_tool_1.default)(req, res, () => {
        const { account, web_id, status_id, message } = req.body;
        index_1.default.execute(index_sql_1.Add, [account, web_id, status_id, message], (err, result) => {
            err ? next(err) : res.send((0, config_1.SuccessTip)());
        });
    });
});
// 查询日志
router.get("/queryPAge", (req, res, next) => {
    // 查询所有
    const page = req.query.page;
    index_1.default.execute(index_sql_1.queryPAge, [`${(page - 1) * 10}`, `${page * 10}`], (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
router.get('/queryNoLog', (req, res, next) => {
    // 查询所有
    const page = req.query.page;
    index_1.default.execute(index_sql_1.queryNoLog, [`${(page - 1) * 10}`, `${page * 10}`], (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
exports.default = router;
