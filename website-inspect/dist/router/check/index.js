"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../db/index"));
const index_sql_1 = require("../../db/sql/check/index.sql");
const config_1 = require("../../config");
const validation_schema_1 = require("./validation.schema");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
// 更新检查站点
router.get("/", (0, express_validator_1.checkSchema)(validation_schema_1.IdValidation), (req, res, next) => {
    const { id } = req.query;
    index_1.default.execute(index_sql_1.Update, [id], (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)());
    });
});
exports.default = router;
