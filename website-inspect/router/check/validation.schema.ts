/*
 * @Author: lzp
 * @Date: 2023-01-22 21:15:19
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 21:27:15
 * @Description: 标签的校验
 */
import type { Schema } from "express-validator";

// 原子化
const Id_Validator: Schema = {
  id: {
    errorMessage: "账户不可为空哦！",
    notEmpty: true,
  },
};

export const IdValidation: Schema = {
  ...Id_Validator,
};
