/*
 * @Author: lzp
 * @Date: 2023-01-22 17:25:06
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 17:31:28
 * @Description: SQL 结果检查器（因为更新时如果它定位不到对应行的话他也是正常不报错的，因此我们需要查询一下更新是否成功）
 */
import type { QueryError } from "mysql2";
import type { NextFunction } from "express";
export function sqlDoctor(
  err: QueryError | null,
  result: any,
  next: NextFunction,
  callback: () => void
): void {
  if (err) {
    next(err);
  } else if (result.changedRows == 0) {
    next(new Error("你的更新语句似乎不起作用！"));
  } else {
    callback();
  }
}
