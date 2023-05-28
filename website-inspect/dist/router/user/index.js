"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../db/index"));
const index_sql_1 = require("../../db/sql/user/index.sql");
const config_1 = require("../../config");
const express_validator_1 = require("express-validator");
const sqlDoctor_1 = require("../../tool/sqlDoctor");
const validation_schema_1 = require("./validation.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errHandler_tool_1 = __importDefault(require("../../tool/errHandler.tool"));
const router = express_1.default.Router();
// 添加用户
router.post("/", (0, express_validator_1.checkSchema)(validation_schema_1.AddUserValidation), (req, res, next) => {
    (0, errHandler_tool_1.default)(req, res, () => {
        const { name, role_id, account, password } = req.body;
        index_1.default.execute(index_sql_1.Add, [account, password, name, role_id], (err, result) => {
            err ? next(err) : res.send((0, config_1.SuccessTip)());
        });
    });
});
// 查询所有部员
router.get("/", (req, res, next) => {
    // 查询所有
    index_1.default.execute(index_sql_1.QueryAll, (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
// 删除部员
router.delete("/", (0, express_validator_1.checkSchema)(validation_schema_1.DeleteUserValidation), (req, res, next) => {
    const { account } = req.query;
    index_1.default.execute(index_sql_1.Delete, [account], (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)());
    });
});
// 修改部员
router.put("/", (0, express_validator_1.checkSchema)(validation_schema_1.FixUserValidation), (req, res, next) => {
    (0, errHandler_tool_1.default)(req, res, () => {
        const { name, role_id, account, password, target } = req.body;
        index_1.default.execute(index_sql_1.Update, [account, password, name, role_id, target], (err, result) => {
            (0, sqlDoctor_1.sqlDoctor)(err, req, next, () => {
                err ? next(err) : res.send((0, config_1.SuccessTip)());
            });
        });
    });
});
// 登录功能
router.get("/loginUser", (0, express_validator_1.checkSchema)(validation_schema_1.LoginValidation), (req, res, next) => {
    (0, errHandler_tool_1.default)(req, res, () => {
        const { account, password } = req.query;
        index_1.default.execute(index_sql_1.QueryPWDUser, [account], (err, result) => {
            if (err) {
                next(err);
            }
            else {
                if (result[0]) {
                    const { password: DataBasePwd } = result[0];
                    if (DataBasePwd && DataBasePwd === password) {
                        // 登录成功
                        // 生成 Token
                        const token = jsonwebtoken_1.default.sign({
                            account,
                            password,
                        }, config_1.PRIVATE_KEY, { expiresIn: "24h" });
                        res.send((0, config_1.SuccessTip)({ token }));
                    }
                    else {
                        next(new Error("账号密码错误！"));
                    }
                }
                else {
                    next(new Error("你似乎还没注册！"));
                }
            }
        });
    });
});
router.get("/loginAdmin", (0, express_validator_1.checkSchema)(validation_schema_1.LoginValidation), (req, res, next) => {
    (0, errHandler_tool_1.default)(req, res, () => {
        const { account, password } = req.query;
        index_1.default.execute(index_sql_1.QueryPWDAdmin, [account], (err, result) => {
            if (err) {
                next(err);
            }
            else {
                if (result[0]) {
                    const { password: DataBasePwd } = result[0];
                    if (DataBasePwd && DataBasePwd === password) {
                        // 登录成功
                        // 生成 Token
                        const token = jsonwebtoken_1.default.sign({
                            account,
                            password,
                        }, config_1.PRIVATE_KEY, { expiresIn: "24h" });
                        res.send((0, config_1.SuccessTip)({ token }));
                    }
                    else {
                        next(new Error("账号密码错误！"));
                    }
                }
                else {
                    next(new Error("你似乎还没注册！"));
                }
            }
        });
    });
});
exports.default = router;
