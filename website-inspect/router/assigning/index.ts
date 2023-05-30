import express from "express";
import type { Request, Response, NextFunction } from "express";
import _ from "lodash";
import DB from "../../db/index";
import { Query, QueryByAccount } from "../../db/sql/assigning/index.sql";
import { SuccessTip } from "../../config";
import { QueryAssigningValidation } from "./validation.schema";
import { taskAssigning } from "../../tool/taskAssigning";
import { checkSchema } from "express-validator";
const router = express.Router();
// 查询分配
router.get("/", (req, res, next) => {
  // 查询所有
  DB.execute(Query, (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
});

// 按账号查询
router.get(
  "/by_account",
  checkSchema(QueryAssigningValidation),
  (req: Request, res: Response, next: NextFunction) => {
    const { account } = req.query;
    DB.execute(QueryByAccount, [account], (err, result) => {
      err ? next(err) : res.send(SuccessTip(result));
    });
  }
);

router.get('/updateAssinging',(req,res,next)=>{
    taskAssigning();
    res.send({
        status:200,
        message:"更新成功"
    })
})
export default router;