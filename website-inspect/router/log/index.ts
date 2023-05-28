import express from "express";

import _ from "lodash";
import DB from "../../db/index";
import type { Request, Response, NextFunction } from "express";
import { Add,  queryNoLog,  queryPAge } from "../../db/sql/log/index.sql";
import { SuccessTip } from "../../config";
import { checkSchema } from "express-validator";
import { sqlDoctor } from "../../tool/sqlDoctor";
import { AddValidation } from "./validation.schema";
import errorHandler from "../../tool/errHandler.tool";
const router = express.Router();
// 添加日志
router.post(
  "/",
  checkSchema(AddValidation),
  (req: Request, res: Response, next: NextFunction) => {
    errorHandler(req, res, () => {
      const { account, web_id, status_id, message } = req.body;
      DB.execute(Add, [account, web_id, status_id, message], (err, result) => {
        err ? next(err) : res.send(SuccessTip());
      });
    });
  }
);

// 查询日志
router.get("/queryPAge", (req, res, next) => {
  // 查询所有
  const page:any=req.query.page ;
  DB.execute(queryPAge,[`${(page-1)*10}`,`${page*10}`], (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
});
router.get('/queryNoLog',(req, res, next) => {
  // 查询所有
  const page:any=req.query.page ;
  DB.execute(queryNoLog,[`${(page-1)*10}`,`${page*10}`], (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
})
export default router;
