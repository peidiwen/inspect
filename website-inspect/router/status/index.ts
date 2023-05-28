import express from "express";
import DB from "../../db/index";
import { QueryAll } from "../../db/sql/status/index.sql";
import { SuccessTip } from "../../config";
const router = express.Router();
// 查询分配
router.get("/", (req, res, next) => {
  // 查询所有
  DB.execute(QueryAll, (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
});

export default router;
