import express from "express";

import _ from "lodash";
import DB from "../../db/index";
import type { Request, Response, NextFunction } from "express";
import {
  Add,
  QueryAll,
  Delete,
  Update,
  QueryPWDUser,
  QueryPWDAdmin
} from "../../db/sql/user/index.sql";
import { SuccessTip, PRIVATE_KEY } from "../../config";
import { checkSchema } from "express-validator";
import { sqlDoctor } from "../../tool/sqlDoctor";
import {
  AddUserValidation,
  DeleteUserValidation,
  FixUserValidation,
  LoginValidation,
} from "./validation.schema";
import jwt from "jsonwebtoken";
import errorHandler from "../../tool/errHandler.tool";
const router = express.Router();
// 添加用户
router.post(
  "/",
  checkSchema(AddUserValidation),
  (req: Request, res: Response, next: NextFunction) => {
    errorHandler(req, res, () => {
      const { name, role_id, account, password } = req.body;
      DB.execute(Add, [account, password, name, role_id], (err, result) => {
        err ? next(err) : res.send(SuccessTip());
      });
    });
  }
);
// 查询所有部员
router.get("/", (req, res, next) => {
  // 查询所有
  DB.execute(QueryAll, (err, result) => {
    err ? next(err) : res.send(SuccessTip(result));
  });
});
// 删除部员
router.delete(
  "/",
  checkSchema(DeleteUserValidation),
  (req: Request, res: Response, next: NextFunction) => {
    const { account } = req.query;
    DB.execute(Delete, [account], (err, result) => {
      err ? next(err) : res.send(SuccessTip());
    });
  }
);
// 修改部员
router.put(
  "/",
  checkSchema(FixUserValidation),
  (req: Request, res: Response, next: NextFunction) => {
    errorHandler(req, res, () => {
      const { name, role_id, account, password, target } = req.body;
      DB.execute(
        Update,
        [account, password, name, role_id, target],
        (err, result) => {
          sqlDoctor(err, req, next, () => {
            err ? next(err) : res.send(SuccessTip());
          });
        }
      );
    });
  }
);

// 登录功能
router.get(
  "/loginUser",
  checkSchema(LoginValidation),
  (req: Request, res: Response, next: NextFunction) => {
    errorHandler(req, res, () => {
      const { account, password } = req.query;
      DB.execute(QueryPWDUser, [account], (err, result: any) => {
        if (err) {
          next(err);
        } else {
          if (result[0]) {
            const { password: DataBasePwd } = result[0];
            if (DataBasePwd && DataBasePwd === password) {
              // 登录成功
              // 生成 Token
              const token = jwt.sign(
                {
                  account,
                  password,
                },
                PRIVATE_KEY,
                { expiresIn: "24h" }
              );
              res.send(SuccessTip({ token }));
            } else {
              next(new Error("账号密码错误！"));
            }
          } else {
            next(new Error("你似乎还没注册！"));
          }
        }
      });
    });
  }
);
router.get(
  "/loginAdmin",
  checkSchema(LoginValidation),
  (req: Request, res: Response, next: NextFunction) => {
    errorHandler(req, res, () => {
      const { account, password } = req.query;
      DB.execute(QueryPWDAdmin, [account], (err, result: any) => {
        if (err) {
          next(err);
        } else {
          if (result[0]) {
            const { password: DataBasePwd } = result[0];
            if (DataBasePwd && DataBasePwd === password) {
              // 登录成功
              // 生成 Token
              const token = jwt.sign(
                {
                  account,
                  password,
                },
                PRIVATE_KEY,
                { expiresIn: "24h" }
              );
              res.send(SuccessTip({ token }));
            } else {
              next(new Error("账号密码错误！"));
            }
          } else {
            next(new Error("你似乎还没注册！"));
          }
        }
      });
    });
  }
);
export default router;
