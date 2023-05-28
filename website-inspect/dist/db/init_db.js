"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDBTable = void 0;
/*
 * @Author: lzp
 * @Date: 2023-01-19 10:51:11
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 21:13:40
 * @Description: 数据库初始化文件
 */
const index_1 = __importDefault(require("./index"));
const create_table_sql_1 = require("./sql/create_table.sql"); // 建表语句
const websiteList_1 = require("./initData/websiteList");
const statusList_1 = require("./initData/statusList");
const roleList_1 = require("./initData/roleList");
const index_sql_1 = require("./sql/website/index.sql");
const index_sql_2 = require("./sql/role/index.sql");
const index_sql_3 = require("./sql/status/index.sql");
const index_sql_4 = require("./sql/check/index.sql");
const index_sql_5 = require("./sql/user/index.sql");
const index_sql_6 = require("./sql/assigning/index.sql");
const afterQueryIsNull_1 = __importDefault(require("../share/afterQueryIsNull"));
// import { Create_Event_UpdateCheckTable } from "./sql/create_event.sql";
function initDBTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const TableList = [...create_table_sql_1.CreateTableList];
        yield index_1.default.promise().execute(TableList[0]);
        initWebsiteUrl();
        yield index_1.default.promise().execute(TableList[1]);
        initRole();
        yield index_1.default.promise().execute(TableList[2]);
        initStatus();
        yield index_1.default.promise().execute(TableList[3]);
        initUser();
        yield index_1.default.promise().execute(TableList[4]);
        initAssigning();
        yield index_1.default.promise().execute(TableList[5]);
        yield index_1.default.promise().execute(TableList[6]);
        initCheck();
    });
}
exports.initDBTable = initDBTable;
function initWebsiteUrl() {
    (0, afterQueryIsNull_1.default)(index_sql_1.QueryAll, () => {
        websiteList_1.Website_List.forEach((url) => {
            index_1.default.execute(index_sql_1.Add, [url], (err, results, fields) => {
                if (err)
                    throw err;
            });
        });
    });
}
function initStatus() {
    (0, afterQueryIsNull_1.default)(index_sql_3.QueryAll, () => {
        statusList_1.Status_List.forEach((status) => {
            index_1.default.execute(index_sql_3.Add, [status], (err, results, fields) => {
                if (err)
                    throw err;
            });
        });
    });
}
function initRole() {
    (0, afterQueryIsNull_1.default)(index_sql_2.QueryAll, () => {
        roleList_1.Role_List.forEach((role) => {
            index_1.default.execute(index_sql_2.Add, [role], (err, results, fields) => {
                if (err)
                    throw err;
            });
        });
    });
}
function initCheck() {
    (0, afterQueryIsNull_1.default)(index_sql_4.QueryAll, () => {
        websiteList_1.Website_List.forEach((_, index) => {
            index_1.default.execute(index_sql_4.Add, [index + 1], (err, results, fields) => {
                if (err)
                    throw err;
            });
        });
    });
}
function initUser() {
    (0, afterQueryIsNull_1.default)(index_sql_5.QueryAll, () => {
        index_1.default.execute(index_sql_5.Add, ["admin", "xswzywb2023", "初始账号", 2], (err, results, fields) => {
            if (err)
                throw err;
        });
    });
}
function initAssigning() {
    (0, afterQueryIsNull_1.default)(index_sql_6.Query, () => {
        index_1.default.execute(index_sql_1.QueryAll, (err, results, fields) => {
            if (err)
                throw err;
            for (let i = 0; i < results.length; i++) {
                index_1.default.execute(index_sql_6.Add, [results[i].id], (err, result, fields) => {
                    if (err)
                        throw err;
                });
            }
        });
    });
}
