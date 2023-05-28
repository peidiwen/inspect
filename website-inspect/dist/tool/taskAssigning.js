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
exports.taskAssigning = void 0;
const index_1 = __importDefault(require("../db/index"));
const index_sql_1 = require("../db/sql/user/index.sql");
const index_sql_2 = require("../db/sql/website/index.sql");
const index_sql_3 = require("../db/sql/assigning/index.sql");
const lodash_1 = __importDefault(require("lodash"));
function taskAssigning() {
    return __awaiter(this, void 0, void 0, function* () {
        let website = [];
        let user = [];
        const [rows] = yield index_1.default.promise().execute(index_sql_2.QueryAll);
        website = rows;
        const [userList] = yield index_1.default.promise().execute(index_sql_1.QueryStaff);
        user = userList;
        let baseNum = ~~(website.length / user.length);
        let residue = website.length % user.length;
        if (baseNum != 0) {
            website = lodash_1.default.shuffle(website);
            let webIndex = 0;
            for (let i = 0; i < user.length; i++) {
                let nowUserAccount = user[i].account;
                for (let j = 0; j < baseNum; j++) {
                    yield index_1.default.promise().execute(index_sql_3.Update, [
                        nowUserAccount,
                        website[webIndex + j].id,
                    ]);
                }
                webIndex = webIndex + baseNum;
            }
            // residue
            if (residue != 0) {
                const webLen = website.length;
                for (let i = 0; i < residue; i++) {
                    const unlucky_account = user[lodash_1.default.random(0, user.length - 1)].account;
                    yield index_1.default.promise().execute(index_sql_3.Update, [
                        unlucky_account,
                        website[webLen - 1 - i].id,
                    ]);
                }
            }
        }
    });
}
exports.taskAssigning = taskAssigning;
