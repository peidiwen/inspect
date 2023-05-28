/*
 * @Author: lzp
 * @Date: 2023-01-19 15:18:32
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-23 18:15:46
 * @Description: 角色路由
 */
import express from "express";

import _ from "lodash";
import DB from "../../db/index";
import { QueryAll } from "../../db/sql/role/index.sql";
import { SuccessTip } from "../../config";

const router = express.Router();
// 查询所有角色
router.get("/", (req, res, next) => {
  // 查询所有
  DB.execute(QueryAll, (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
});

export default router;
