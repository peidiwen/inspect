import express from "express";
import type { Request, Response, NextFunction } from "express";
import _ from "lodash";
import DB from "../../db/index";
import { Update } from "../../db/sql/check/index.sql";
import { SuccessTip } from "../../config";
import { IdValidation } from "./validation.schema";
import { checkSchema } from "express-validator";
const router = express.Router();

// 更新检查站点
router.get(
  "/",
  checkSchema(IdValidation),
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.query;
    DB.execute(Update, [id], (err, result) => {
      err ? next(err) : res.send(SuccessTip());
    });
  }
);

export default router;
