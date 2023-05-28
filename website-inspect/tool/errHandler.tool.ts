/*
 * @Author: lzp
 * @Date: 2023-01-20 16:41:39
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-20 16:54:38
 * @Description: 路由错误处理函数
 */
import type { Request, Response } from "express";
import { validationResult } from "express-validator";
function errorHandler(req: Request, res: Response, callback: () => void) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "发生校验错误喽", errors: errors.array() });
  }
  callback();
}
export default errorHandler;
